// 项目启动文件
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/libateerlogin');
const db=mongoose.connection;
db.on('error',function(err){
  console.log(err+'err')
})

db.once('open',function(){
  console.log('ok');
})
module.exports=db;
// 放在app.js里面不知道router里面可不可以使用

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var user=require('./router/router');
// 关于user的router.
var jade=require('jade');
// 开始添加中间件：中间件作用与全部的请求，这个特性就决定了中间件可以预先加载加工所有的请求在转交给特定的路由来处理
var fs=require('fs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 管道开头
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(csurf());
// app.use(function(req,res,next){
//   res.locals._csrfToken=req._csrfToken();
//   next();
//   // 现在你所有的表单都必须提供一个叫做_csrf的域，他必须跟生成的令牌相匹配。
// })

//静态资源托管发送可以有自己的参数
var options={
  dotfiles:'ignore',
  // 是否输出文件名以(.)点开头的文件
  etag:true,
  extensions:['htm','html'],
  // 设置文件扩展名备份
  index:false,
  // 发送目录索引文件
  lastModified:true,
  maxAge:'1d',
  redirect:false,
  // 当路径为目录时，重定向至'/'。
  setHeaders:function(res,path,stat){
    res.set('x-timestamp',Date.now());
  }
}; 
// app.use('/',express.static('../public',options));

app.use('/',express.static('../public'));
// 为什么这里不可以设置options
// 这里明明/用了啊，为什么不会显示。没给最一开始的路径。





// 应用级中间件：如果这里没有绑定事件的话，那么所有的请求都会执行这个中间件
// app.use(express.static(path.join(__dirname, 'public')));
// 中间件的定义和使用。那个登录的就是。



// 开始使用路由
// 这是整体的一种方法。或者可以直接用static拖管静态文件实现这个效果
// app.get('/',function(req,res){
//   // const html=fs.readFileSync(path.resolve(__dirname,'../public/index.html'),'utf-8');
//   // res.sendFile(html);
//   // 里面是文件的绝对路径，而不是文件

//   res.sendFile(path.resolve(__dirname,'../public/index.html'))
// });

app.use('/user',user);
// 所有这个里面的都挂载到user下面了
app.use('/test',user);



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
  // 调用next，表示中间件可以继续向下传递，如果不调用next，管道就会终止，也不会再有后续的处理器或者中间件做处理
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3001)
