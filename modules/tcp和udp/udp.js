var dgram=require('dgram');
var ser=dgram.createSocket('udp4');
var message=new Buffer("服务器广播数据");
ser.on('message',(msg,data)=>{
  console.log('get:'+msg+'from'+data.address+':'+data.port);
  // data为一个对象，显示发送属性的地址对象
  // msg未发送过来的buffer对象
  ser.setTTL(200);
  var buf=new Buffer('服务器端数据返回了！');
  ser.send(buf,0,buf.length,data.port,data.address);
});

ser.on('listening',()=>{
  var address=ser.address();
  console.log(address)
})

ser.bind(41234),'localhost';
// 该套接字将接收所有网卡上4123端口上的消息，在绑定之后，触发listening事件。