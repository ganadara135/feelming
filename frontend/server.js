const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotevn = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next( { dev });
const handle = app.getRequestHandler();
dotevn.config()

app.prepare().then( () => {
    const server = express();

    server.use(morgan( 'dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expressSession( {
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }));

    // 동적 페이지 요청 처리 부분 / 동적 라우터 처리
    server.get('/post/:id', (req, res) => {
        console.log("check  동적 페이지 요청 부분")
        return app.render(req, res, '/singlePost', { id: req.params.id});
    });
    server.get('/hashtag/:tag', (req, res) => { // 외부 주소, 클라이언트에 보여주는 주소
        return app.render(req, res, '/hashtag', { tag: req.params.tag});    // 내부 주소, 프런트와 백엔드 교신 주소
    });
    server.get('/user/:id', (req, res) => {
        return app.render(req, res, '/user', { id: req.params.id});
    });



    server.get('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(3060, () => {
        console.log('next+express running on port 3060');
    });
});