const fs = require("fs"); // 파일쓰기
const {Console} = require("console");

const output = fs.createWriteStream("./stdout.log");
const errorOutput = fs.createWriteStream("./stderr.log");

const logger = new Console({stdout: output, stderr: errorOutput});
const num = 5;
logger.log("num: %d", num);
logger.error("num: "+num);

const word = "hihi";
console.log(`hello ${word}`);

console.error(new Error("에러 메세지"));

const arr = [
    {name: "A", numb: "01"},
    {name: "B", numb: "02"},
];
console.table(arr);

const obj = {
    students: {
        grade1: {class1: {}, class2: {}},
        grade2: {class1: {}, class2: {}},
        teachers: ["A", "B"],
    }
}
console.dir(obj, {depth:1, color:true});

console.time("func 1");
for(let i=0;i<999999;i++){

}
console.timeEnd("func 1");