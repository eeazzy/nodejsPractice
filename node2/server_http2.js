const { error } = require('console');
const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req, res) => {
    try{
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
        const data = await fs.readFile('./server2.html');
        res.end(data);
    }catch (error){
        console.log(error);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})

.listen(8080, () => {
    console.log('8080포트에서 대기중');
})

server.on('error', (error) => {
    console.log(error);
})