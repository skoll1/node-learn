// 模块既可能是一个文件，也可能是一个包含多个文件的目录，如果模块是个目录，node通常会在这个目录下找个index.js作为模块入口

// 货币转换
var change=0.91;


function round=(amount){
  return Math.round(amount*100)/100;
}

exports.renmingbi=function(renmingbi){
  return round(renmingbi*change);
}

exports.meiyuan=function(meiyuan){
  return round(meiyuan/change);
}
// exports对象上面只设定了两个属性，所以当引入这个模块的时候只能访问到这两个函数，change是个私有属性，程序不能直接访问。

// 要创建只返回一个变量或函数的模块，需要使用module.exports导出。

// node_modules:可以使文件或程序在系统之间共享代码，作为一个独特的模块引入机制，可以不知道模块在文件系统中的具体位置，
   
// 1：两个注意事项
// 1.1：如果模块是目录，在模块目录中定义的模块的的文件必须被命名为index.js。
// 1.2：node能把模块作为对象缓存起来,如果程序中的两个文件引入了相同的模块，第一个文件会把模块返回的数据存到程序的内存中，这样第二个文件就不用再去访问和计算模块的源文件了。


