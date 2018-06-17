// 从指定位置读文件
var fs=require('fs');
fs.open('./fs.txt','r',function(err,fd){
  if(err){
    console.log(err)
  }else{
    var buf=new Buffer(255);
    fs.read(fd,buf,0,100,0,function(err,bytesRead,buffer){
      // fd:open回调函数返回的值。
      // 0：缓存区开始写的位置
      // 10：从里面读取的数量
      // 0：从里面读取的位置

      // bytesRead:实际读取的字节数
      // buffer:被读取的缓存区位置。
      console.log(buffer.slice(0,bytesRead).toString());
    })
  }
})

// 重指定位置写文件
fs.open('./write.txt','w',function(err,fd){
  if(err){
    console.log(err);
  }else{
    var buf=new Buffer('我爱编程！');
    fs.write(fd,buf.toString(),3,9,10,function(err,written,buffer){
      if(err){
        console.log(err)
      }else{
        console.log(written);
      }
    });
    // buf:写入的数据。
    // 3：缓存区开始的位置
    // 9：缓存区读取的数量
    // 0：文件内开始的位置
  }
  fs.close(fd);
})