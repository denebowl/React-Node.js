/*
const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(`hello!`);
});

const port = 4000;
server.listen(port, () => {
  console.log('listring at port : %d', port);
});
*/
var num = 1;

function a() {
  var num = 10;
  b();
}

function b() {
  console.log(num);
}

a();
b();
