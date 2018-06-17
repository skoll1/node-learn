var http=require('http');
http.createServer((req,res)=>{
    res.end('ok');
    console.log('子线程');
}).listen(4040)