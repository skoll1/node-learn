var fork=require('child_process').fork;
var cpus=require('os').cpus();

for(var i=0;i<cpus.length;i++){
  fork('./worker.js')
  console.log(i)
}

// 主从模式：
// 主进程和工作进程。用分布式架构并行处理业务模式，具备较好的可伸缩性和稳定性。

// 主进程不负责具体的业务处理，而是负责调度和管理业务的模式他是趋向稳定的。
// 工作进程负责具体的业务处理，他们关注的是工作进程的稳定性。

