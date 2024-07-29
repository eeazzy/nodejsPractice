const path = require("path");

console.log(__dirname); // 현재 실행되고 있는 파일의 디렉토리 경로
console.log(__filename);

console.log(path.basename(__filename)); // 파일 이름만 나온다
console.log(path.basename(__filename, ".js")); // 확장자 제외된 이름만 나옴

console.log(path.dirname(__filename)); // 입력 받은 파일의 디렉토리 경로

console.log(path.extname(__filename)); // 확장자 이름

console.log(path.parse("/aa/bb/cc/dd.js"));
// { root: '/', dir: '/aa/bb/cc', base: 'dd.js', ext: '.js', name: 'dd' } 이게 출력된다

const path2 = path.format({ // 입력된 정보를 가지고 경로를 만들어준다
     root: '/', 
     dir: '/aa/bb/cc', 
     base: 'dd.js', 
     ext: '.js', 
     name: 'dd' 
});
console.log(path2); 

console.log(path.join("/home","user","dir","t.js")); // 합쳐준다