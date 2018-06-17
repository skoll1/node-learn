// 创建多进程应用程序

// 在node中，只使用一个线程来执行所有的操作，如果应用程序中存在某个操作需要消耗大量的cpu资源的情况，则其他操作会受到一定程度的影响，例
// 当服务器在执行一个非常消耗CPU资源的操作，则在该该操作执行之后接受的客户端请求都需要等待该操作完成之后才能被处理。

// 为了充分利用服务器的多核cpu性能，在nodeJs应用程序的主进程运行之后，可以开启多个子进程，在多个子进程之间可以共享内存空间，通过子
// 进程之间的互相通信来实现信息的交换。多个进程之间通过共享端口的方式将请求分配给多个子进程来执行。

// spawn开启子进程
var cp=require('child_process');
var p1=cp.spawn('node',['teste1.js'],{
  // cwd:'./test1.js'
});

var p2=cp.spawn('node',['test2.js'],{
  stdio:'pipe'
});

// 监听1的输出
p1.stdout.on('data',function(data){
  console.log('子进程标准输出'+data);
  p2.stdin.write(data);
})

p1.on('exit',function(code,single){
  // 只是退出，传入，输出可能并未终止。
  console.log('子进程退出，代码为'+code);
  // process.exit();
})

p1.on('close',function(code,single){
  // 所有输入，输出都以完成，进程退出

  // code:正常退出0，异常退出null

  // single:父进程关闭子进程的时候，参数值为父进程发送给子进程的信号的名称。其他场合均为null.




  console.log('close');
})

p1.on('error',(err)=>{
  console.log(err);
  process.exit();
})

