var cluster=require('cluster');
cluster.setupMaster({
  exec:'child.js',
  // exec:'child2.js'
  // args:{运行子程序需要的参数}
  // silent:主线程和子线程是否共享标准输入/输出.
});
cluster.fork();
console.log('主');
console.log(cluster.settings)
// 存放了setupMaster方法中使用的setting参数对象中设定的所有属性值或其默认值




// 官网示例是一个应用，被几个核同时执行，多执行的是fork()指令，那可不可以exec那里多加文件呢？
