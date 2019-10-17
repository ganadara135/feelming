const express = require('express');
const morgan = require('morgan');   // 로그기록 관리 미들웨어
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSesion = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');       // 세션(백엔드)과 쿠키(프런트) 관리

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();


app.use(morgan('dev'));
app.use('/', express.static('uploads'));    // uploads 폴더를 루트폴더에 접근하는 것처럼 처리해주는 미들웨어
// json 형식에 데이터 처리
app.use(express.json());
// form 형식에 데이터 처리
app.use(express.urlencoded({ extended: true }));    // req.body 처리 부분
app.use(cors( {
    origin: true,    // 쿠키 교환 설정 with frontend
    credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSesion( {
    resave: false,          // 매번 세션 강제 저장
    saveUninitialized: false,   // 빈 값도 저장
    secret: process.env.COOKIE_SECRET,     // 세션 암호화
    cookie: {
        httpOnly: true,         // 쿠키 접근 차단
        secure: false,          // https 를 사용할 때 true  
    },
    name: 'ThisIsNotCookie',     // 세션이름, 나중에 쿠키값인줄 모르게 이름 변경 필요, 
                                // defaults : connect.sid
    //memory: redisMemory       // 차후 캐시서버용       
}));
app.use(passport.initialize());     // 위 app.use(expressSesion( 이후 수행
app.use(passport.session());


app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter); 
app.use('/api/hashtag', hashtagAPIRouter);




app.listen(process.env.NODE_ENV === 'production' ? process.env.PORT : 3065, () => {
    console.log(`server is running on ${process.env.PORT}`);
})

