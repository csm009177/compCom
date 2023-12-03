import http from 'http';
const port = 3212;

const serv = http.createServer((req, res) => {
  res.end('hello');
});

serv.listen(port, () => {
  console.log(`http://localhost:${port}`);
});