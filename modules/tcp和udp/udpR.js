var dgram=require('dgram');
var message=new Buffer('我是李巴特儿');
var client=dgram.createSocket('udp4');
client.send(message,0,message.length,41234,'localhost',(err,bytes)=>{
  // client.close();
  console.log('已发送数据'+bytes)
  // err发送失败通常为dns解析，导致数据发送错误。bytes为发送数据的字节数。
});


client.on('message',(msg,data)=>{
  console.log('get:'+msg+'from'+data.address+':'+data.port);

});
// 客户端需要绑定端口么？如果发送数据前还没有使用该socket对象的bind()方法来指定其端口号集地址，那么操作系统
   // 将为他随机分配一个端口号并可以接受任何地址的数据
// client.bind()
client.on('close',()=>{
  console.log('服务器已关闭！')
})