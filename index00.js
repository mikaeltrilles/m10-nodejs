const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.end('Hello from Node !');
});
server.listen(3000);