var fs=require('fs');
var options={
  flags:'r',
  // 
  encoding:'utf-8',
  start:0,
  end:100,
}
var file=fs.createReadStream('./stream.txt',options);
// 读html格式有点问题，但是之前的没问题啊！

file.on('open',function(fd){
  console.log('start');
})

file.on('readable',function(fd){
  console.log('readable');
})
// file.pause();
file.on('data',function(data){
  console.log('数据');
  console.log(data);
})


file.on('end',function(){
  console.log('end');
})

file.on('close',function(){
  console.log('close')
})

file.on('error',function(){
  console.log('error');
})
