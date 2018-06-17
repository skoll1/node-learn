var express=require('express');
var app=express();
var options = {
  dotfiles: 'ignore',
  // 如何处理点开头的文件
  etag: false,
  extensions: ['htm', 'html'],
  // 设置文件的扩展名回退，如果找不到文件搜索具有指定扩展名的文件。
  index: false,
  // 是否发送指定的目录的索引文件
  maxAge: '1d',
  redirect: false,
  // 当路径名是目录时，是否重定向到尾部“/”.
  setHeaders: function (res, path, stat) {
    // 设置http头提供文件的功能
    res.set('x-timestamp', Date.now());
    res.set('name','libater')
  }
}

// app.use(express.static('public'),options);
// 错误写法

app.use(express.static('static',options))
app.listen(3030,function(){
  console.log('ok 3030');
});