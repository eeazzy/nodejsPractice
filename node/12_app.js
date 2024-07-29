const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({
    limit: "50mb" // 한번에 받을 수 있는 body 파일 크기 50MB까지
}));

app.listen(port, () => {
    console.log("서버 실행 완료");
});

// router
app.get("/", (req, res) => {
    res.send("hi");
});

app.get("/customer/:id", (req, res) => { // :넣으면 동적으로 바뀌는 값이다
    const id = parseInt(req.params.id); // request로 받은 값 저장(String으로 받아옴)
    console.log("id",id);
    const customers = [
        {id: 0, name: "A", num: "01"},
        {id: 1, name: "B", num: "02"},
    ]

    const customer = customers.filter(c => c.id === id);
    if(customer.length > 0){
        res.status(200).send(customer[0]);
    }else{
        res.status(404).send({msg: "존재하지 않는 id"});
    }
});

app.post("/customer", (req, res) => { 
    console.log(req.body.param);

    res.send("OK");
});