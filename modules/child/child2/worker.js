var http=require('http');
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hello world!');
}).listen(Math.round((1+Math.random())*1000),(data)=>{
  console.log('开启进程');
});