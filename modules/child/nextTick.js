// 用于将一个函数推迟到代码中所书写的下一个同步方法执行完毕或者异步方法的事件回调函数开始时使用。
// 相当于setTimeout()立即执行函数，但是比他快

// 应用1：指定一个函数在一个同步方法执行完毕立即调用
var fs=require('fs');
// var finish=function(){
//   console.log('文件执行完毕')
// };
// process.nextTick(finish);
// console.log(fs.readFileSync('./app.js').toString());



// 应用2：指定两个耗时操作同时进行
// function foo(){
//   function bar(){
//     var file=fs.createReadStream('./app.js');
//     file.on('data',(data)=>{
//       console.log('1'+data.length);
//     })
//   }
//   process.nextTick(bar)
// }

// var file=fs.createReadStream('./app.js');
// file.on('data',(data)=>{
//   console.log('2'+data.length);
// });
// foo();
// process.abort()
// 使node应用程序异常终止，并发送SIGABRT信号。


console.log(process.cwd())
// 当前进程的目录
process.chdir('../')
// 改变当前的工作目录
console.log(process.cwd())

// process.exit([code]):为操作系统提供退出码

console.log(process.getgid());
// 进程的组ID
console.log(process.getuid())
// 进程的用户id

console.log(process.getgroups());
// 进程的所有附属组id构成的数组
// console.log(process.initgroups());
// 使用一个指定用户的所有归属组来初始化组列表

// process.kill(20,'string what you like!');
// 想一个进程发送信号。

// process.umask()
// 用于修改后的文件权限掩码。

console.log(process.uptime())
// 返回当前模块的执行时间
console.log(process.hrtime())
// 一段代码运行的时间。