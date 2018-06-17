var http=require('http');

var server=http.createServer((req,res)=>{
  res.end('hello'+process.pid);
});

var worker;
process.on('message',(m,tcp)=>{
  if(m=='server'){
    worker=tcp;
    worker.on('connection',(socket)=>{
      server.emit('connection',socket);
    })
  }
})


process.on('exit',()=>{
  for(var pid in workers){
    workers[pid].kill();
  }
});

process.on('uncaughtException',(err)=>{
  // 停止接受新的连接
  process.send({act:'suicide'})
  // 实现平滑过渡，在失败之前前发送一个消息，让他先创建好新的线程。
  worker.close(()=>{
  // 所有已连接断开之后，退出进程。
    process.exit(1);
  });


  // 还有一种情况，如果进程中出现未能捕获的异常，就以为着有那么一段代码在健壮性上是不合法的，需要日志记录下来
  logger.error(err);
})