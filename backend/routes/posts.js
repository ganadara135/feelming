const express = require('express');
const db = require('../models');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],     // 비밀번호 가져오지 않기
            }],
            order: [['createAt', 'DESC'], ['updateAt', 'ASC']]
        });
        console.log('posts : ', posts)
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;