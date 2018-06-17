// 1============创建方式

// 1
// var buf=new Buffer(100);
// // buf.fill(value,start,end)
// buf.fill('libateer')
// console.log(buf);

// 2
// var arr=['1','利巴特尔']
// var buf=new Buffer(arr);
// console.log(buf);

// 3
// var buf=new Buffer('libateer','utf8')
// console.log(buf)





// var buf=new Buffer('里巴特日');
// console.log(buf.length)
// 得到的是缓存区字节的长度




// 2============
// buf.toString([encoding],start,end)

var buf=new Buffer('李巴特热','utf8');
// console.log(buf+'---'+buf.toString('utf8'))
// 加号还带自动转换编码


// buf.write(str,offset,length,encoding)
// console.log(buf)
// buf.write('号',5,buf.length,'utf8')
// 多个buffer拼接出错
// console.log(buf.toString())




// 引入新模块:初级功能：将buffer转换成string,高级：将多个buffer转为字符串
// const StringDecoder = require('string_decoder').StringDecoder;
// const decoder = new StringDecoder('utf8');

// var s1=new Buffer('我');
// console.log(s1);
// var s2=new Buffer('爱你得');
// var re=decoder.write(s1)
// re=decoder.write(s2);
// console.log(re)



// ===buffer转换json

var buf=new Buffer('李巴特儿');
var str=JSON.stringify(buf);
var json=JSON.parse(str);
console.log(json)

var buf2=new Buffer(json);
console.log(buf2+'.')