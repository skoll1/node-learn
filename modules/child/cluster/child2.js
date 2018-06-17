var http=require('http');
http.createServer((req,res)=>{
  res.end('ok');
  console.log('子')
}).listen(4041)