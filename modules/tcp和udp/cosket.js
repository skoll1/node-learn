// socket端口对象
var fs=require('fs')
var net=require('net');
var ser=net.createServer();
var out=fs.createWriteStream('./out.text')
ser.on('connection',(socket)=>{
  socket.setEncoding('utf-8');
  socket.on('data',(data)=>{
    console.log(data);
    console.log(socket.bytesRead);
    // 已接收到的字节
  });

  socket.on('end',()=>{
    console.log('客户端关闭连接');
    out.end('--李巴特儿---')
  });

  socket.pipe(out,{end:false});
  // 管道写入另一文件。

  var address=socket.address();
  console.log(address)
});
ser.listen(8431);
