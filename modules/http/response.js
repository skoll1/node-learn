const http=require('http');
var server=http.createServer((req,res)=>{
  var responseHeader={
    'Content-Type':'text/plain',
    'Access-Control-Allow-Origin':'http://localhost',
    'content-encoding':'utf-8',
    'location':'http://localhost:1234'
    // 将客户端从定向到另一个地址。
  }
  if(req.url=='/'){
    res.writeHead(200,responseHeader);
    // res.setHeader('Content-Type','text/plain')
    // 可以单独添加
    // res.removeHeader('Content-type')
    // 可以删除
    if(res.headersSent){
      console.log('发送');
    }else{
      console.log('未发送');
    }
    // res.writeHead(200,{'Content-Type':'text/html','location':'http://localhost:8090'});
    res.sendDate=false;
    res.statusCode=404;
    // 这俩个都不管用。
    res.write('你好');
    // 第一个write方法。node将立即发送缓存信息以及write方法中的指定的内容。
    var er=res.write('hello');
    // 这个还是个返回值，说明是否发送成功
    // 第二次发送write()的时候node将单独发送里面的响应内容，不发送信息头，直接发送内容，并且和之前的内容一起缓存在客户端中
    res.end();
  }
}).listen(8080);