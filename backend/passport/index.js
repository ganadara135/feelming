const passport =require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
    passport.serializeUser( (user, done) => { // 서버쪽 [{ id: 3, cookie: 'adgsef' }]
        return done(null, user.id);
    });

    passport.deserializeUser( async(id, done) => {
        try {
            const user = await db.User.findOne({
                where: { id },
            });
            return done(null, user);   // req.user
        } catch (e) {
            console.error(e);
            return done(e);
        }
    })

    local();
};

// 프런트에서 서버로는 cookie 만 보낸다
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id: 3 발견
// id: 3 이 deserializeUser 에 들어감
// req.user 로 사용자 정보가 들오감.

// 요청 보낼때마다 deserialziedUser 가 실행됨
// 실무에서는 deserialzieUser 결과를 캐싱함