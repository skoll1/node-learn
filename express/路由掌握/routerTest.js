var app=require('express')();
app.use(function(req,res,next){
  console.log('\n\nallways');
  next()
})
app.get('/a',function(req,res){
  res.send('haha')
  console.log('路由终止');
  // 这里终止的意思是没有使用next传递么
})
app.get('/a/b',function(req,res){
  console.log('never use');
  res.send('a/b')

  // 每一次都是整体的管道走一遍，一旦找到上边的路由，那么下边的自动被抛弃.
  // 以一般的中间件使用的话，a/b都不行.(把get替换为use)
})



app.get('/b',function(req,res,next){
  console.log('1b');
  res.send('1b')
  // 这个还是只有传递才可以在下面用next啊
  next()
})

app.get('/b',function(req,res){
  console.log('2b')
  res.send('2b')

  // 服务器会收到2b的，但是页面不会反回参数。
})

app.use('/b',function(err,req,res,next){
  console.log('检测到错误并传递')
  next(err);
  // u
})

// 使用use和get做路由的区别。4.0将的很清楚。


app.use(function(err,req,res,next){
  console.log('未知的错误'+err.message);
  res.send('500-服务器出错了');
})

app.use(function(req,res){
  console.log('未找到匹配的路由');
  res.send('404');
})
app.listen(3000,function(){
  console.log('端口监听：3000')
})


