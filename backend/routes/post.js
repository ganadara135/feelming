const express = require('express');
const db = require('../models');
const multer = require('multer');
const path = require('path');

const { isLoggedIn } = require( './middleware');
const router = express.Router();

const upload = multer( {
    storage: multer.diskStorage( {
        destination(req, file, done) {      // 파일 저장 위치
            done(null, 'uploads');  // uplaods 는 파일을 저장할 서버측 폴더명, 
        },
        filename(req, file, done) {           // 파일명
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext); //제로초.png  ext===.png,  basename===제로초
            done(null, basename + new Date().valueOf() + ext );
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
});  

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {  // POST /api/post
   // console.log("router.post_/_", req.body )
    try {
        const hashtags = req.body.content.match(/#[^\s]+/g);
        const newPost = await db.Post.create({
            content: req.body.content,   // ex) '코드 파이팅 #구독  #좋아요  눌러주세요'
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate( {
                where: { name: tag.slice(1).toLowerCase() },
            })));
            console.log("해시태그 결과 result : ", hashtags);
            // .addHashtags()  는 sequelize 가 자동으로 만들어준 함수임.
            await newPost.addHashtags(result.map( r => r[0]));
        }

        console.log("req.body.image : ",req.body.image)
        if (req.body.image) {       // 이미지 주소를 여러개 올리면 image: [주소1, 주소2]
            console.log("array check : ", Array.isArray(req.body.image))
            if (Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((v) => {
                    console.log("images chk : ", v);
                    return db.Image.create({ src: v });
                }));
                await newPost.addImages(images);
            } else {                // 이미지 하나만 올리면 image: 주소1
                const image = await db.Image.create({ src: req.body.image });
                await newPost.addImage(image); 
            }
        }
        // const User = await newPost.getUser();
        // newPost.User = User;
        // res.json(newPost);
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            include: [{
                model: db.User,
            }, ]
        })
        res.json(fullPost);
    } catch (e) {
        console.error(e);
        next(e);
    }
})



            // uplaod.array() 는 미들웨어, image 는 전달해 주는 곳의 명칭과 같게
router.post('/images', upload.array('image'), (req, res) => {
    console.log(req.files);
    res.json(req.files.map( v => v.filename));

});

router.get('/:id/comments', async (req, res, next) => {
    try {
        const post = await db.Post.findOne({ where: {id: req.params.id }});
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        const comments = await db.Comment.findAll( {
            where: {
                PostId: req.params.id,
            },
            order: [['createdAt', 'ASC']],
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
        });
        res.json(comments);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/:id/comment', isLoggedIn, async (req, res, next) => {
    try {
        // if (!req.user) {
        //     return res.status(401).send('로그인이 필요합니다');
        // }
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다');
        }
        const newComment = await db.Comment.create({
            PostId: post.id,
            UserId: req.user.id,
            content: req.body.content,
        });
        await post.addComment(newComment.id);
        const comment = await db.Comment.findOne({
            where: {
                id: newComment.id,
            },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
        });
        return res.json(comment);
    } catch (e) {
        console.error(e)
        next(e);
    }
})
module.exports = router;