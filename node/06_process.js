const process = require("process");

console.log(process.env); // 환경정보

process.on("beforeExit", (code)=>{ // 종료되기 직전 출력
    console.log("beforeExit 이벤트 리스너", code);
});

process.on("exit", (code)=>{ // 종료될 때 출력
    console.log("exit 이벤트 리스너", code);
});