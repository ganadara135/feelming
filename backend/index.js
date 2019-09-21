const express = require('express');
const morgan = require('morgan');   // 로그기록 관리 미들웨어
const cors = require('cors');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

const app = express();
db.sequelize.sync();



app.use(morgan('dev'));
// json 형식에 데이터 처리
app.use(express.json());
// form 형식에 데이터 처리
app.use(express.urlencoded({ extended: true }));    // req.body 처리 부분
app.use(cors());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);





app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
})

