console.log(process.execPath)
// 进程执行的绝对路径
console.log(process.versions)
// node及其各依赖的版本号
console.log(process.platform)
// 当前运行node平台

console.log(process.argv);
// node应用程序时的所有命令行参数。

console.log(process.env)
// node应用程序操作系统信息

console.log(process.pid)
//当前进程的ID.
console.log(process.arch)
// 进程的处理架构
console.log(process.title)

// process的方法。
var usage=process.memoryUsage();
console.log(usage)
// res:使用的内存量
// total:v8分配的内存量
// used:v8使用的内存量
// external:


