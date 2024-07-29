//file system
const fs = require("fs");

fs.readFile("./sample/sample.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
}); // 파일 읽기 (비동기 함수 async)

const data = fs.readFileSync("./sample/sample.txt", "utf-8"); // 파일 읽기 (동기 함수 sync)
console.log(data);

const txt = "파일 쓰기";
fs.writeFile("./sample/writeText.txt", txt, "utf-8", (err) => { // 파일 쓰기 (async)
    if(err) throw err;

    const data2 = fs.readFileSync("./sample/writeText.txt", "utf-8");
    console.log(data2);
})

fs.writeFileSync("./sample/writeText.txt", txt, "utf-8"); // 파일 쓰기 (sync)
const data2 = fs.readFileSync("./sample/writeText.txt", "utf-8");
console.log(data2);