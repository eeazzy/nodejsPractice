const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

const indexRouter = require('./routers');

const app = express();

app.use(morgan('dev')); // 정보 기록 출력
//app.use('요청 경로',express.static('실제 경로(폴더 이름)'));
// app.use('/',express.static(__dirname, 'public'));
app.use(cookieParser()); // 알아서 쿠키 생성해줌
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  }));
app.use(express.json()); // 알아서 파싱해줌 req.body.
app.use(express.urlencoded({extended: true})); // form데이터(이미지는 안된다)


app.use((req, res, next) => { // next를 넣어야 라우터가 실행된다
    console.log('모든 요청에 실행됨');
    next();
});

app.use('/', indexRouter);

app.get('/:name', (req, res) => {
    res.send(`hi ${req.params.name}`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.send('에러났다');
});

app.listen(8080, () => {
    console.log('express서버 실행중');
});