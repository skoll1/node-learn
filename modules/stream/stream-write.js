var fs=require('fs');
// var readStream=fs.createReadStream('./stream-read.js');
// var n=0;
// readStream.on('data',function(data){
//   n++;
//   readStream.pause();
//   console.log(Buffer.isBuffer(data));
//   // console.log(data);
//   // console.log(data.toString('utf8'))
//   setTimeout(function(){
//     console.log('data is pause end')
//     readStream.resume();
//   },3000)
// })
// .on('readable',function(){
//   console.log('数据是可读的')
// })
// .on('end',function(){
//   console.log(n)
// })

// 拷贝文件的代码
var readStream=fs.createReadStream('./stream-read.js');

var writeStream=fs.createWriteStream('./copy-stream.js');

readStream.on('data',function(data){
  if(writeStream.write(data)==false){
    console.log('读的太快了，操作系统的缓存满了！');
    readStream.pause();
  };
})

readStream.on('end',function(){
  writeStream.end();
  console.log(writeStream.bytesWritten);
  // 被写入的字节
});

writeStream.on('drain',function(){
  console.log('缓存读完了，可以往里面写了');
  // 防止爆仓
  readStream.resume();
})