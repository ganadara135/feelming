const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
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
        console.log(newUser);
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
            }, {
                model: db.User,
                as: 'Followings',
                attributes: ['id'],
            }, {
                model: db.User,
                as: 'Followers',
                attributes: ['id'],
            }],
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
            where: { id: user.id },
            include: [{
              model: db.Post,
              as: 'Posts',
              attributes: ['id'],
            }, {
              model: db.User,
              as: 'Followings',
              attributes: ['id'],
            }, {
              model: db.User,
              as: 'Followers',
              attributes: ['id'],
            }],
            attributes: ['id', 'nickname', 'userId'],
          });
          // console.log(fullUser);
          return res.json(fullUser);
        } catch (e) {
          next(e);
        }
      });
    })(req, res, next);
});

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
                model: db.Image
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


//  프로필 이미지 저장하는 부분
var upload = multer( {
    storage: multer.diskStorage( {
        destination(req, file, done) {      // 파일 저장 위치
            done(null, 'uploads');  // uplaods 는 파일을 저장할 서버측 폴더명, 
        },
        filename(req, file, done) {           // 파일명
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext); //제로초.png  ext===.png,  basename===제로초
            done(null, basename + new Date().valueOf() + ext );
        },
        // onError : function(err, next) {
        //     console.log("file upload err : ", err);
        //     next(err);
        // }
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
});

// uplaod.array() 는 미들웨어, image 는 전달해 주는 곳의 명칭과 같게
// router.put('/profileImg', upload.array('image'), (req, res) => {
//     console.log("req.files : ", req.files);
//     res.json(req.files.map( v => v.filename));
// });

router.put('/:id/profileImg', upload.array('image',1), async (req, res, next) => {  // POST /api/user

    try {
         await db.UserAsset.create({
            UserId: req.params.id,            // foreinKey 는 앞글자가 대문자임 
            src: req.files[0].filename,
            dType: req.files[0].mimetype,
            description: req.files[0].originalname,
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
router.post('/uploadWorkplaceUpfile', upload.array('upFiles'), (req, res) => {
    console.log("req.files : ", req.files);
    res.json(req.files.map( v => v.filename));
});

router.put('/uploadWorkplace', async (req, res, next) => {  // put /api/user

    var regex = /[\[\]]/g;

    console.log("파일 업로드 결과 확인")
    console.log("req.user.id : ", req.user.id);
    //console.log("req.body.upFiles : ", req.body.upFiles);
    //console.log("req.body.upFiles.file.originFileObj : ", req.body.upFiles.file);
    console.log("req.body.upFiles.file.response : ", req.body.upFiles.file.response);
    console.log("req.body.keywords : ", req.body.keywords)
    
    //const convertCategory = req.body.category
    console.log("category stringify() : ", JSON.stringify(req.body.keywords));
    console.log("category stringify() : ", JSON.stringify(req.body.keywords).replace(regex,""));

   
    // var match = /[\[\]]/g.exec(JSON.stringify(req.body.category))
    // console.log("match : ", match);
    
    

    try {
        await db.UserAsset.create({
            UserId: req.user.id,            // foreinKey 는 앞글자가 대문자임 '아이디가 아닌 table 에서 auto_increment 한 id 사용 
            src: req.body.upFiles.file.response[0],
            dType: req.body.dataType,
            category: JSON.stringify(req.body.category).replace(regex,""),
            publicScope: req.body.publicScope,
            keywords: JSON.stringify(req.body.keywords).replace(regex,""),
        });

        res.json("성공");
    } catch (e) {
        console.error(e)
        next(e);
    }
})



module.exports = router;