// 进程之间传递消息
var cluster=require('cluster');
cluster.setupMaster({
  exec:'child.js'
});
var worker=cluster.fork();

worker.on('message',(data)=>{
  // 接受进程1的消息
  console.log(data);
  worker.disconnect();
  // 不让这个子进程收到其他的外部连接。
  worker.kill()
  // 收到这个消息之后杀死这个进程
})

worker.send({username:'路下风'});
// 利用worker对象传送数据
cluster.on('exit',(worker,code,signal)=>{
  if(worker.suicide===true){
    console.log(`自动 d% 退出`,worker.id);
  }else{
    console.log('异常退出'+worker.id)
  }

  if(signal){
    console.log('信号是'+signal);
  }
})