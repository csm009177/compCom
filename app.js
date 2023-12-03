import http from 'http'
const port = 3212
const serv = http.createServer((res, req) => {
  
})

serv.listen(port, ()=> {
  console.log(`http://localhost:${port}`);
})