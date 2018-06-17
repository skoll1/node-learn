var dgram=require('dgram');

var sre=dgram.createSocket('udp4');
ser.on('message',(msg)=>{
  var buf=new Buffer('已接收客户端发送的数据'+msg);

  ser.setBroadcast(true);
  ser.send(buf,0,buf.length,41235,'192.168.1.225');
})
ser.bind(41235,'192.168.1.225');