var fs=require('fs');
fs.watchFile('./fs-watch.js',function(curr,prev){
  if(Date.parse(prev.ctime)==0){
    console.log('create');
  }else if(Date.parse(curr.ctime==0)){
    console.log('delete')
  }else if(Date.parse(prev.mtime)!==Date.parse(curr.time)){
    console.log('change');
  }
})

fs.watchFile('./fs-watch.js',function(curr,prev){
  if(Date.parse(curr.ctime)!=0){
    console.log(curr.size);
  }
})
// haha


// unwatchFile()
// 可以取消文件改变的时候的执行的一些操作。
 // watch应该才是nodemon方法的执行函数吧。
 var watcher=fs.watch('./fs.txt');
 watcher.on('change',function(event,filename){
  console.log(event);
  console.log(filename);
 })