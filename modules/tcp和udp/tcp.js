// 使用net模块实现基于TCP的数据通信。
// 这个tcp服务器根本没有做什么啊！！！！
var net=require('net');

var ser=net.createServer({allowHalfOpen:false},function(socket){
  // false:会进行四次结束握手
  // true:不会进行最后一次，就是说服务器可以向客户端发送数据，但是不会再接受客户端发送过来的数据了。
   // console.log(socket)
});
// 返回被创建的服务器








// 可以监听的事件
ser.on('connection',function(socket){
    console.log('开始连接服务器')

});

// 监听客户端和服务端有连接
ser.on('listening',()=>{
  console.log('已连接')
});

// 监听客户端有错误
ser.on('err',(err)=>{
  if(e.code='EADDEINUSE'){
    console.log('端口早已被占用！')
  }
  console.log(err);
});

ser.on('close',(err)=>{
  console.log('服务器已关闭')
})







ser.listen(4040,(err)=>{
  console.log('已连接');

  var address=ser.address();
  console.log(address);
  // 查看服务器所监听的具体信息。

  ser.getConnections((err,count)=>{
    console.log('当前连接'+count);

    ser.maxConnection=2;
    // 最大连接数为2个
  });
  // 查看当前的已连接数目
});
// 通知服务器开始监听客户端连接
// 这个里面还有一个参数可以实现指定等待队列中的连接请求，一旦超过请求，就不在接受请求。


// 
