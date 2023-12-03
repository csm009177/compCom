import http from 'http';
import doc, { createElement } from './comp.js';
const port = 3212;

const index = 
  doc("yohan", "margin:0; padding:0; box-sizing: border-box;", createElement("div", {}, "test"))

const serv = http.createServer((req, res) => {
  res.end(index);
});

serv.listen(port, () => {
  console.log(`http://localhost:${port}`);
});