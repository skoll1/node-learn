var cluster=require('cluster');
var http=require('http');

if(cluster.isMaster){
  cluster.fork();
  cluster.fork();
  // 在多个进程中运行http服务器。
  // 这个开启的线程是else里面的么？默认运行当前node主模块的文件。
  console.log('这段程序运行在主程序中');
}else{
  http.createServer((req,res)=>{
    res.end('ok');
    console.log('这段程序运行在子线程'+cluster.worker.id+'处理');
  }).listen(3030);
}


// 进程开启触发的方法
cluster.on('fork',(worker)=>{
  // console.log(worker)
  console.log('子进程已开启')
})

// 新进程开启运行之后触发的方法。会收到反馈信息,当主线程接收到该反馈信息之后，触发online事件。
cluster.on('online',(worker)=>{
  // console.log(worker)
})


cluster.on('listening',(data,adress)=>{
  console.log(adress)
  // { 
  //   addressType: 4,
  //   // IPv4
  //   address: null,
  //   // 子进程的服务器监听地址
  //   port: 3030, 

  //   fd: undefined }
})