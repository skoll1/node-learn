var crypto=require('crypto');
var fs=require('fs');
var shasum=crypto.createHmac('shal',key);
// key为一个PEM格式的密匙。
// 需要openssl工具生成密匙。



var s=fs.ReadStream('./app.js');
s.on('data',(d)=>{
  shasum.update(d);
})

s.on('end',()=>{
  var d=shasum.digest('hex');
  console.log(d);
})