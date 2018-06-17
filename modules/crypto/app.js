var crypto=require('crypto');
// console.log(crypto.getCiphers());
// 可以使用的所有加密算法

// console.log(crypto.getHashes())


// 散列的实现:为一个文件生成摘要
var fs=require('fs');
var shasum=crypto.createHash('sha1');
// 创建一个hash对象，并指定使用的算法

var s=fs.createReadStream('./1.html')

s.on('data',(d)=>{
  shasum.update(d);
  // 创建一个摘要,如果里面的数据不是buffre类型，那么必须增加编码类型，而且只要不输出，可以多次使用update增加数据
})

s.on('end',()=>{
  var d=shasum.digest('base64');
  // 输出摘要内容，并填写摘要的编码格式,如果不填的话，输出一个buffer。
  // hex,base64,binary
  console.log(d);
})
