const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === '/about') {
    res.end("It's all about Node !");
  } else if (req.url === '/contact') {
    res.end('To contact us, good luck !');
  } else {
  res.end('Hello from Node !');
  }
});
server.listen(3000);