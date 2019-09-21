const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {    //  '/api/user'

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
        const hashedPassword = await bcrypt.hash(req.body.password, 12); // salt 는 10 ~ 13 사이
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

router.get('/:id', (req, res) => {  // 남의 정보 가져오는 것  ex) //3

});

router.post('/logout', (req, res) => {

});

router.post('/login', (req, res) => {

});

router.get('/:id/follow', (req, res) => {

});

router.post('/:id/follow', (req, res) => {
    
});

router.delete('/:id/follow', (req, res) => {
    
});

router.delete('/:id/follower', (req, res) => {
    
});

router.get('/:id/posts', (req, res) => {
    
});

module.exports = router;