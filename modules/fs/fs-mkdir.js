var fs=require('fs');
fs.mkdir('./mkdir',function(err){
  if(err){
    console.log(err);
  }else{
    console.log('ok');
  }
})

// 读取目录
fs.readdir('./mkdir',function(err,files){
  if(err){
    console.log(err);
  }else{
    console.log(files+'haha!')
  }
})