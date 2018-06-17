// 查看文件或目录的信息

var fs=require('fs');

fs.stat('./mkdir',function(err,stats){
  if(err){
    console.log(err);
  }else{
    console.log(stats);
    // dev:文件或目录所在的设备ID.
    // nlink:硬盘连接的数量
    // size
    // atime:访问时间
    // mtime:文件的修改时间
    // ctime:文件的创建时间



    // if(stats.isFile()){
    //   // 这里有一堆方法不知道怎么用。
    //   console.log('ok');
    // }else{
    //   console.log('no')
    // }
  }
})

// 检查文件是否存在
fs.exists('./mkdir',function(exists){
  if(exists){
    console.log('该文件存在');
  }else{
    console.log('文件不存在');
  }
})


// 获取文件的绝对路径

fs.realpath('./mkdir',function(err,resolvePath){
  if(err){
    throw err;
  }else{
    console.log(resolvePath);
  }
})


// 修改文件访问时间以及修改时间（垃圾功能）

// 修改文件的读写权限
fs.chmod('./mkdir',0600,function(err){
  // 所有者可以读写，其他人没有任何权限。
  // 这就是后台文件访问限制。
  // 0644：其他人只读
  // 0755：其他人可读和执行
  // 0740:所有者所在的组可读
  if(err){
    throw err
  }else{
    console.log('修改文件权限成功')
  }
});

// 创建与删除文件的硬连接
// 创建于查看符号连接（这个有什么用么？）
// 截断文件：首先清除文件内容，然后修改文件的尺寸。
// 删除空目录：
// 监视文件或目录：watchFile:
