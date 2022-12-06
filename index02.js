const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === '/about') {
    res.end("It's all about Node !");
  } else if (req.url === '/contact') {
    res.end('To contact us, good luck !');
  } else if (req.url === '/'){
  res.end('Hello from Node !');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found</h1>' + req.url);
  }
});
server.listen(3000);