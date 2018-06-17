var fs=require('fs');
var path=require('path');

// fs.readFile('./fs.txt',function(err,data){
//   if(err){
//     console.log(err)
//   }else{
//     var b1=data.toString();
//     // 读的是二进制
//     console.log(b1);
//   }
// })

// 或者这样

fs.readFile('./fs.txt','utf-8',function(err,data){
  if(err){
    console.log(err)
  }else{
    console.log(data);
  }
})

// 写入操作
var str="lilibabateterere"
fs.writeFile('./write.txt',str,function(err){
  if(err){
    console.log(err);
  }
})
// 追加数据:底部加数据，还有个其他的方法appendFile()里面。
var options={
  flag:'a'
}

fs.writeFile('./write.txt','追加的数据',options,function(err){
  if(err){
    console.log(err);
  }else{
    console.log('写入文件成功');
  }
})

// 从指定位置开始读取文件

