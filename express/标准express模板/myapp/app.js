var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 开始添加中间件：中间件作用与全部的请求，这个特性就决定了中间件可以预先加载加工所有的请求在转交给特定的路由来处理
var index = require('./routes/index');
var users = require('./routes/users');
var scurf=require('csurf')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 管道开头
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csurf());
app.use(function(req,res,next){
  res.locals._csrfToken=req._csrfToken();
  next();
  // 现在你所有的表单都必须提供一个叫做_csrf的域，他必须跟生成的令牌相匹配。
})

app.use(express.static(path.join(__dirname, 'public')));
// 中间件的定义和使用。那个登录的就是。
app.use(function(req,res,next){
  console.log('req.url:'+req.url);
  next();
  // 别的中间件就是这样的功能的封装。
})
// 中间件：处理所有http谓词的路由处理器


//路由处理器：把他看成是只处理特定get,post的中间件。路由的功能就是根据请求路径和请求方法来处理特定的请求。
app.use('/', index);
app.use('/users', users);
// 管道结尾
// 依照一定的次序向管道中添加插件。注意次序二字。

// 管道的最后放一个“捕获一切”的处理器，处理最后路由不匹配的情况。
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

module.exports = app;



// 常用中间件
// 1：basicAuth
// 2:body-parser:
// 3:json:如果你希望收到json编码的请求体api。
// 4：urlencode:解析互联网媒体类型为application/x-www-form-urlencode的请求体。处理表单和ajax常用的方式。
// 5:compress
// 6:cookie-parser
// 7:morgan:自动日志记录请求，并将其变为请求对象上的query属性。
// 8：query：解析查询的字符串。
// 
