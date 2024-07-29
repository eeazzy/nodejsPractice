const timeout = setTimeout(()=>{
    console.log("1초 후에 실행된다");
}, 1000);

const interval = setInterval(()=>{
    console.log("1초 마다 실행된다");
}, 1000);

setTimeout(()=>{
    clearInterval(interval);
}, 3000);

const immediate = setImmediate(()=>{
    console.log("setImmediate 호출")
});
console.log("setImmediate보다 먼저 호출 된다");
