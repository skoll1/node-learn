// 运行的进程可能触发一下的事件
process.on('exit',()=>{
  console.log('进程退出')
});
process.exit();


process.on('uncaughtException',(err)=>{
  console.log(err);
})
// 程序出现了一个异常的错误。


// 各种信号事件:当运行进程收到各种事件，会触发信号事件。
