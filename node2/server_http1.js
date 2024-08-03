const { error } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'}) // 사파리 같은건 html인지 모를 수 있고 한국어도 못읽을 수 있어서 넣기
    res.write('<h1>Hello</h1>');
    res.end('<p>the end</p>');
})

.listen(8080, () => {
    console.log('8080포트에서 대기중');
})

server.on('error', (error) => {
    console.log(error);
})