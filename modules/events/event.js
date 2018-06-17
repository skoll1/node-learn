// events模块只提供了一个对象:events.EventEmitter.核心就是事件触发和事件监听器功能的封装。
var EventEmitter=require('events').EventEmitter;
const http=require('http');

const server=http.createServer();
server.listen(1337,()=>{
  console.log('ok');
})


// 绑定一个事件
server.once('request',(req,res)=>{
  console.log(req.url);
  res.end(req.url)
});

server.setMaxListeners(10);
// 默认情况下一个对象最多绑定10个事件。

server.on('zidingyi',(arg)=>{
  console.log('自定义事件'+arg)
})
server.emit('zidingyi','haha');

EventEmitter.listenerCount(server,'request');