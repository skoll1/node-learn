var os=require('os');

console.log(os.tmpdir())
// 操作系统默认存放临时文件的地址
console.log(os.endianness())
// 获取cpu的字节数
console.log(os.hostname())
// 获取计算机名字
console.log(os.type());
// 获取计算机的操作系统
console.log(os.platform());
// 操作系统类型
console.log(os.arch())
// cpu架构
console.log(os.release())
// 操作系统版本号
console.log(os.uptime())
// 系统当前运行时间
console.log(os.loadavg())
// 存放了一分钟，5分钟，15分钟的系统平均负载
console.log(os.totalmem())
// 系统的总内存量
console.log(os.freemem())
// 剩余内存
console.log(os.cpus())
console.log(os.networkInterfaces())
// 返回所有的系统的网络接口
console.log(os.EOL)
// 该值为操作系统中使用的换行符
