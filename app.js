import http from 'http';
import doc, { createElement, component, render } from './comp.js';
import contenType from './contenType.js'
import { tagMaker } from './tagMake.js';
const cont = contenType('text/html','utf8')
const port = 3212;


const index = 
  doc("yohan", "margin:0; padding:0; box-sizing: border-box;", 
    tagMaker("div", `id="test"`, "width:100vw; height:100vh", "") )

  let serv = http.createServer((req,res)=> {
    if(req.method === 'GET'){
      console.log(req.method);
      res.writeHead(200, cont); 
      res.end(index);
    }
  })

serv.listen(port, () => {
  console.log(`http://localhost:${port}`);
});