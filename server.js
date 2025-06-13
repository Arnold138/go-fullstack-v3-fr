const Http = require('http');
const server = Http.createServer((req, res) => {
    res.end('Hello World');
});
server.listen(process.env.PORT || 3000);