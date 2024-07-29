// 단방향 암호화
const { rejects } = require("assert");
const crypto = require("crypto");
const { resolve } = require("path");

const pw = "qwer1234";
const cryptoPW = crypto.createHash("sha512").update(pw).digest("base64");
// 알고리즘인 sha512방식으로 pw를 인코딩 방식인 base64로 암호화 한다
console.log(cryptoPW);

// sailting 암호화
const createSalt = () => { // 기본 salt 만들어준다
    return new Promise((resolve, reject) => { 
        crypto.randomBytes(64, (err, buf) => { // 랜덤 64바이트 생성
            if(err) reject(err);
            resolve(buf.toString("base64"));
        });
    })
}
const createCryptoPW = async (plainPassword) => { // 암호화 하기
    const salt = createSalt();
    return new Promise((resolve, reject) => {
        // 암호화할 문자열, salt, 반복 횟수, 출력할 바이트 수, 해시 알고리즘, 콜백함수
        crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
            if(err) reject(err);
            resolve({password: key.toString("base64"), salt: salt});
        })
    })
}

const getCryptoPW = async (plainPassword, salt) => { // 비밀번호 비교
    return new Promise((resolve, reject) => {
        // 암호화할 문자열, salt, 반복 횟수, 출력할 바이트 수, 해시 알고리즘, 콜백함수
        crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
            if(err) reject(err);
            resolve({password: key.toString("base64"), salt: salt});
        })
    })
}