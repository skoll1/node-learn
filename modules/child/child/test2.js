var fs=require('fs');
var out=fs.createWriteStream('./message.txt');
process.stdin.on('data',(data)=>{
  // 拥有一个可以用于读入标准输入流的对象
  // 拥有的事件：同上

  // 拥有的方法:
  // read:用于读取数据
  // setEndocing:指定使用什么编码方式读取数据
  // pause:用于通知对象停止触发data事件
  // resume:恢复触发事件
  // pipe:设置一个数据通道，然后取出所有数据流将其输出到另一端所指向的目标
  // unpipe:取消通道
  // unshift:解绑流数据的解析器。
  console.log('test2')
  out.write(data);
})

process.stdin.on('end',(data)=>{
  process.exit();
})