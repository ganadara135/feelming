const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');


const path = require('path');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.get('/',isLoggedIn,  (req, res) => {    //  '/api/user'
    // if( !req.user ) {
    //     return res.status(401).send('로그인이 필요합니다.');
    // }
    const user = Object.assign( [], req.user.toJSON());
    delete user.password;
    return res.json(user);
});

router.post('/', async (req, res, next) => {        // 회원가입
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId,
            },
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다');
        }
        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // salt 는 10 ~ 13 사이
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });

        delete newUser.password;
        return res.status(200).json(newUser);

    } catch (e) {
        console.error(e);
        //return res.status(403).send(e);
        return next(e);     // front 에 알아서 에러 전달해줌
    }
});

router.get('/:id', async (req, res, next) => {  // 남의 정보 가져오는 것  ex) //3
    try {
        const user = await db.User.findOne({
            where: { id: parseInt(req.params.id, 10) },
            incldue: [{
                model: db.Post,
                as: 'Posts',
                attributes: ['id'],

                // model: db.UserAsset,
                // // as: 'Posts',
                // attributes: ['id', 'PostId'],
                // incldue: [{
                //   model: db.Post,
                //   attributes: ['id'],
                //   where: {id: PostId}  
                // }],
            }, {
                model: db.User,
                as: 'Followings',
                attributes: ['id'],
            }, {
                model: db.User,
                as: 'Followers',
                attributes: ['id'],
            },
        ],
            attributes: ['id', 'nickname'],
        });
        const jsonUser = user.toJSON();
        jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
        jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
        jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
        res.json(jsonUser);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
});

router.post('/login', (req, res, next) => { // POST /api/user/login
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginErr) => {
        try {
          if (loginErr) {
            return next(loginErr);
          }
          
          const fullUser = await db.User.findOne({
            attributes: ['id', 'nickname', 'userId'],
            where: { id: user.id },
            include: [{
                model: db.Post,           // 등록된 컨텐츠 정보
                as: 'Posts',        
                attributes: ['id','UserId'],       
            },{
              model: db.User,           // 팔로윙 정보
              as: 'Followings',
              attributes: ['id'],
            }, {
              model: db.User,           // 팔로워 정보
              as: 'Followers',
              attributes: ['id'],
            }]
        
// SELECT `User`.`id`, `User`.`nickname`, `User`.`userId`, `Posts`.`id` AS `Posts.id`, `Posts`.`UserId` AS `Posts.UserId`,
// `Followings`.`id` AS `Followings.id`, `Followings->Follow`.`createdAt` AS `Followings.Follow.createdAt`, `Followings->Follow`.`updatedAt` AS `Followings.Follow.updatedAt`, `Followings->Follow`.`followingId` AS `Followings.Follow.followingId`, `Followings->Follow`.`followerId` AS `Followings.Follow.followerId`, `Followers`.`id` AS `Followers.id`, `Followers->Follow`.`createdAt` AS `Followers.Follow.createdAt`, `Followers->Follow`.`updatedAt` AS `Followers.Follow.updatedAt`, `Followers->Follow`.`followingId` AS `Followers.Follow.followingId`, `Followers->Follow`.`followerId` AS `Followers.Follow.followerId` 
// FROM `User` AS `User` LEFT OUTER JOIN `Post` AS `Posts` ON `User`.`id` = `Posts`.`UserId` LEFT OUTER JOIN ( `Follow` AS `Followings->Follow` INNER JOIN `User` AS `Followings` ON `Followings`.`id` = `Followings->Follow`.`followingId`) ON `User`.`id` = `Followings->Follow`.`followerId` LEFT OUTER JOIN ( `Follow` AS `Followers->Follow` INNER JOIN `User` AS `Followers` ON `Followers`.`id` = `Followers->Follow`.`followerId`) ON `User`.`id` = `Followers->Follow`.`followingId` 
// WHERE `User`.`id` = 1              

          })
          //console.log(fullUser);
          return res.json(fullUser);
        } catch (e) {
          next(e);
        }
      });
    })(req, res, next);
});

// SELECT `User`.`id`, `User`.`nickname`, `User`.`userId`, `UserAssets`.`id` AS `UserAssets.id`, `Followings`.`id` AS `Followings.id`, `Followings->Follow`.`createdAt` AS `Followings.Follow.createdAt`, `Followings->Follow`.`updatedAt` AS `Followings.Follow.updatedAt`, `Followings->Follow`.`followingId` AS `Followings.Follow.followingId`, `Followings->Follow`.`followerId` AS `Followings.Follow.followerId`, `Followers`.`id` AS `Followers.id`, `Followers->Follow`.`createdAt` AS `Followers.Follow.createdAt`, `Followers->Follow`.`updatedAt` AS `Followers.Follow.updatedAt`, `Followers->Follow`.`followingId` AS `Followers.Follow.followingId`, `Followers->Follow`.`followerId` AS `Followers.Follow.followerId` 
// FROM `User` AS `User` LEFT OUTER JOIN `UserAsset` AS `UserAssets` ON `User`.`id` = `UserAssets`.`UserId` 
// LEFT OUTER JOIN ( `Follow` AS `Followings->Follow` INNER JOIN `User` AS `Followings` ON `Followings`.`id` = `Followings->Follow`.`followingId`) 
// ON `User`.`id` = `Followings->Follow`.`followerId` 
// LEFT OUTER JOIN ( `Follow` AS `Followers->Follow` INNER JOIN `User` AS `Followers` ON `Followers`.`id` = `Followers->Follow`.`followerId`) 
// ON `User`.`id` = `Followers->Follow`.`followingId` WHERE `User`.`id` = 1;


router.post('/:id/follow', isLoggedIn, async (req, res, next ) => {
    try {
        const me = await db.User.findOne({
            where: { id: req.user.id },

        });
        await me.addFollowing(req.params.id);
        res.send(req.params.id);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.delete('/:id/follow', isLoggedIn, async (req, res, next) => {
    try {
      const me = await db.User.findOne({
        where: { id: req.user.id },
      });
      await me.removeFollowing(req.params.id);
      res.send(req.params.id);
    } catch (e) {
      console.error(e);
      next(e);
    }
  });



router.get('/:id/posts', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll( {
            where: {
                UserId: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0,
                RetweetId: null,
            },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                //model: db.Image
                model: db.UserAsset,
            }, {
                model: db.User,
                through: 'Like',
                as: 'Likers',
                attributes: ['id'],
            }],
        })
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});


router.get('/:id/followings', isLoggedIn, async (req, res, next ) => {
    try {
        const user = await db.User.findOne({
            //req.params.id  가  0 이면 req.user.id 로 처리
            where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
        })
        //console.log('req.body.offset : ', req.body.offset);

        const followers = await user.getFollowings({
            limit: parseInt(req.query.limit, 10),
            offset: parseInt(req.query.offset, 10),
            attributes: ['id', 'nickname'],
        });
        res.json(followers);
    } catch (e) {
        console.error(e);
        next(e);
    };
});

router.get('/:id/followers', isLoggedIn, async (req, res, next ) => {
    try {
        const user = await db.User.findOne({
            //req.params.id  가  0 이면 req.user.id 로 처리
            where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
        });
        const followers = await user.getFollowers({
            limit: parseInt(req.query.limit, 10),
            offset: parseInt(req.query.offset, 10),
            attributes: ['id', 'nickname'],
        });
        res.json(followers);
    } catch (e) {
        console.error(e);
        next(e);
    };
});


router.delete('/:id/follower',isLoggedIn, async (req, res, next) => {
    try {
        const me = await db.User.findOne({
            where: { id: req.user.id },
        });
        await me.removeFollower(req.params.id);
        res.send(req.params.id);
    } catch (e) {
        console.error(e);
        next(e);
    };  
});

router.patch('/nickname', async (req, res, next ) => {
    try {
        await db.User.update({
            nickname: req.body.nickname,
        }, {
            where: { id: req.user.id },
        });
        res.send(req.body.nickname);
    } catch (e) {
        console.error(e)
        next(e);
    }
})


//  사용자가 업로드하는 파일 저장하는 부분
AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
});

const uploadProfile = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'feelming',
        key(req, file, cb) {
        cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
        },
    }),
    limits: { fileSize: 60 * 1024 * 1024 },         // 60 MB
});

//  사용자의 프로필 파일 저장하는 부분
// var uploadProfile = multer( {
//     storage: multer.diskStorage( {
//         destination(req, file, done) {      // 파일 저장 위치
//             done(null, 'uploads/profile/');  // uplaods 는 파일을 저장할 서버측 폴더명, 
//         },
//         filename(req, file, done) {           // 파일명
//             const ext = path.extname(file.originalname);
//             const basename = path.basename(file.originalname, ext); //제로초.png  ext===.png,  basename===제로초
//             done(null, basename + new Date().valueOf() + ext );
//         },
//         // onError : function(err, next) {
//         //     console.log("file upload err : ", err);
//         //     next(err);
//         // }
//     }),
//     limits: { fileSize: 20 * 1024 * 1024 },
// });

// uplaod.array() 는 미들웨어, image 는 전달해 주는 곳의 명칭과 같게
// router.put('/profileImg', upload.array('image'), (req, res) => {
//     console.log("req.files : ", req.files);
//     res.json(req.files.map( v => v.filename));
// });

router.put('/:id/profileImg', uploadProfile.array('image',1), async (req, res, next) => {  // POST /api/user

    try {
         await db.UserAsset.create({
            UserId: req.params.id,            // foreinKey 는 앞글자가 대문자임 
            src: req.files[0].filename,
            dataType: req.files[0].mimetype,
            // description: req.files[0].originalname,
         });

        //  console.log("req.body : ",req.body)
        //  console.log("newUserAsset : ", newUserAsset)
 
         res.json(req.files.map( v => v.filename));
    } catch (e) {
        console.error(e)
        next(e);
    }  
 })


router.get('/:id/profileImg', isLoggedIn, async (req, res, next) => {  // GET /api/user
    try {
        const userAssetResult = await db.UserAsset.findAll({
            //req.params.id  가  0 이면 req.user.id 로 처리
            where: { UserId: parseInt(req.params.id, 10) },
            order: [['createdAt', 'DESC'], ],
            limit: 3,
        })

        // console.log(" userAssetResult : ", userAssetResult);
        // console.log(" userAssetResult : ", userAssetResult.map( v => v.src))

        
        if(!userAssetResult){       // userAssetResult === nulll
            res.json({error : "Not matching result"})
        }else {
            res.json(userAssetResult.map( v => v.src));
        }

    } catch (e) {
        console.error(e);
        next(e);
    };
});


router.get('/:id/profileCareer', isLoggedIn, async (req, res, next) => {  // GET /api/user
       
    try {
        const careerResult = await db.Career.findAll({
            //req.params.id  가  0 이면 req.user.id 로 처리
            where: { UserId: parseInt(req.params.id, 10) },
            attributes: ['career'],
            //order: [['createdAt', 'ASC'], ],
            order: [['createdAt', 'DESC'], ],
            limit: 2,
        })

 
        if(careerResult.length === 0){       // userAssetResult === nulll
            res.json({error : "Not matching result"})
        }else {
            res.json(careerResult);
        }

    } catch (e) {
        console.error(e);
        next(e);
    };
});


router.post('/currentCareer', async (req, res, next ) => {
    console.log('req.body in Current: ', req.body);

    try {
        await db.Career.create({
            UserId: req.user.id,            // foreinKey 는 앞글자가 대문자임 '아이디가 아닌 table 에서 auto_increment 한 id 사용
            career: req.body.currentCareer,
            // startDate: req.body.startDate,
            // endDate: req.body.endDate,
        });
        
        res.send(req.body.currentCareer);
    } catch (e) {
        console.error(e)
        next(e);
    }
})

router.put('/pastCareer', async (req, res, next ) => {
    console.log('req.body in Past : ', req.body);

    try {
        await db.Career.create({
            UserId: req.user.id,            // foreinKey 는 앞글자가 대문자임 '아이디가 아닌 table 에서 auto_increment 한 id 사용
            career: req.body.pastCareer,
            // startDate: req.body.startDate,
            // endDate: req.body.endDate,
        });
        
        res.send(req.body.pastCareer);
    } catch (e) {
        console.error(e)
        next(e);
    }
})


router.get('/:id/selfIntroduction', isLoggedIn, async (req, res, next) => {  // GET /api/user
       
    try {
        const selfIntroResult = await db.User.findOne({
            //req.params.id  가  0 이면 req.user.id 로 처리
            where: { UserId: parseInt(req.params.id, 10) },
            attributes: ['id', 'selfIntro'],
        })
        
        res.json(selfIntroResult);
        
    } catch (e) {
        console.error(e);
        next(e);
    };
});


router.patch('/selfIntroduction', async (req, res, next ) => {
    try {
        await db.User.update({
            selfIntro: req.body.selfIntroduction,
        }, {
            where: { id: req.user.id },
        });
        res.send(req.body.selfIntroduction);
    } catch (e) {
        console.error(e)
        next(e);
    }
})


// uplaod.array() 는 미들웨어, image 는 전달해 주는 곳의 명칭과 같게
router.post('/uploadWorkplaceUpfile', uploadProfile.array('upFiles'), (req, res) => {
//    console.log("req.files : ", req.files);

    res.json(req.files.map( v => v.location));
    //res.json(req.files.map( v => v.filename));
});

router.put('/uploadWorkplace', async (req, res, next) => {  // put /api/user

    var regex = /[\[\]]/g;

    //  console.log("파일 업로드 결과 확인")
    //  console.log("req.user.id : ", req.user.id);
    // // console.log("req.body : ", req.body);
    // console.log("req.body.upFiles : ", req.body.upFiles);
    // //console.log("req.body.files.location : ", req.body.files.location);
      console.log("req.body.upFiles.file : ", req.body.upFiles.file);
   //  console.log("req.body.upFiles.fileList.response : ", req.body.upFiles.fileList.response);
    //console.log("req.files : ", req.files)
    
    // //const convertCategory = req.body.category
    // console.log("category stringify() : ", JSON.stringify(req.body.keywords));
    // console.log("category stringify() : ", JSON.stringify(req.body.keywords).replace(regex,""));

    // var match = /[\[\]]/g.exec(JSON.stringify(req.body.category))
    // console.log("match : ", match);
   
    const keywordList = req.body.keywords;

    try {
        let t = await db.sequelize.transaction({autocommit: true});
        const resultTag = await Promise.all(keywordList.map(tag =>  
            db.KeywordTag.findOrCreate({
                transaction: t,
                where: {keyword: tag},
            })));
        const arrKeywordTag = [];
        resultTag.forEach( tag => {
    //        console.log("boolean : ", tag[1])
    //        console.log("id : ", tag[0]['dataValues'].id);
            //console.log("id : ", tag[0]['dataValues']);
            if(tag[1])
                arrKeywordTag.push(tag[0]['dataValues'].id)
        });
        
     //   console.log("arrKeywordTag : ", arrKeywordTag)
        const resultPost = await db.Post.create({
            category: JSON.stringify(req.body.category).replace(regex,""),
            publicScope: req.body.publicScope,
            copyright: req.body.copyRight,
            UserId: req.user.id,                    // foriegnkey
        }, {transaction: t});

        await resultPost.addKeywordTag(arrKeywordTag.map( r => r),{transaction: t}); // 다대다 관계 테이블에 값 입력 방식, transaction 처리 방식도 잊지 말자, api 매뉴얼에도 안나옴



        if (Array.isArray(req.body.upFiles.fileList)) {
            await Promise.all(req.body.upFiles.fileList.map((list) => {
                console.log('list : ', list)
                return db.UserAsset.create({
                    src: list.response[0],
                    dataType: req.body.dataType,
                    fileType: list.type,
                    PostId: resultPost.dataValues.id,
                    UserId: req.user.id, }, {transaction: t});
            }));
        } else { // 이미지를 하나만 올리면 image: 주소1             // 현재 하나짜리는 전혀 실행 안됨, 위 배열에서 다 처리됨
            await db.UserAsset.create({ 
            src: req.body.upFiles.file.response[0],
            dataType: req.body.dataType,
            fileType: req.body.upFiles.file.type,
            PostId: resultPost.dataValues.id,
            UserId: req.user.id, }, {transaction: t});
        }
    
        
        t.commit();
            
        t.afterCommit( (t) => {
            //res.json("성공");
            res.status(200).send('등록완료');
        })
        
    } catch (e) {
        console.error(e)
        next(e);
    }
})



module.exports = router;