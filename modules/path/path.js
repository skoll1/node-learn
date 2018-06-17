var path=require('path');
// 1:路径解析，将不规范的路径格式化，简化开发人员处理各种复杂路径的判断。将非标准的路径字符串转化为标准路径字符串
var myp1=path.normalize(__dirname+'node/.//..//path.js')
// console.log(myp1)



// 2:路径结合，合并，路劲最后不会带目录分隔符
var path1='path1',path2='path2',path3='path3'
var allpath=path.join(path1,path2,path3)
// console.log(allpath)



//3: 获取绝对路径，以应用程序为起点，根据参数字符串解析出一个绝对路径。
var myp2=path.resolve(__dirname,'path.js')
// console.log(myp2)




// 4:获取相对路径
var from='path.js';
var to='http.js';
var myp3=path.relative(from,to);
// console.log(myp3)
// /Users/libateer/Js-demo/node/模块小实验/path/path.js



// 5:获取路径中的目录名
var myp4=path.dirname(__dirname+'/path.js');
// console.log(myp4)
// /Users/libateer/Js-demo/node/模块小实验/path

// 6:判断参数是否是绝对路径
// path.isAbsolute()

// 7:path.parse(pathString)
// 返回路径字符串的对象

// 8：path.format(pathObject)
// 从对象中返回路径字符串，与上边相反。



// 相对与__dirname:总是返回被执行的’’js‘‘所在文件夹的绝对路径。__filename获取到的地址更为具体，直接是当前书写的'js'的绝对路径
var myp5=path.basename(__dirname+'/path.js');
// 返回文件名



var myp6=path.extname(__dirname+'/path.js');
// 返回文件的扩展名


// 总结：只有在require的时候使用相对路径，其他地方统一用绝对路径。
