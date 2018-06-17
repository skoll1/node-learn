// 缓存问题么？难道是？
var debug=require('debug')('picture');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');
var compress=require('compression');
// 安全保护
var helmet=require('helmet');

// 安全
// var csrf=require('csurf');

var send = require('./routes/send');
var download=require('./routes/download');
var signIn=require('./routes/signIn');
var signUp=require('./routes/signUp');

var admin=require('./routes/admin');
var signInRequired=require('./content/adminRequire');
// 提交表单接口
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port',3000);
var server=app.listen(app.get('port'),function(){
  debug('express');
});




app.use(logger('dev'));
// 输出日志文件配置
app.use(compress());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
   secret:'recommand 128 bytes random string',
   name:'user'
}))
app.use(express.static(path.join(__dirname, 'public/html')));
app.use(express.static(path.join(__dirname, 'upload')));
// 主页定位

// csrf攻击
app.use(bodyParser.urlencoded({extended:false}));
// app.use(csrf({cookie:true}));

app.use('/send',send);
app.use('/photo',download);
app.use('/zhuce',signIn);
app.use('/denglu',signUp);
app.use('/admin',signInRequired.signInRequire,signInRequired.adminRequire,admin);
// 可以这样使用么？不是链式的写法

// 测试csrf:

// app.get('/form',function(req,res){
//   res.send({csrfToken:req.csrfToken()});
//   // 这就意味着我第一转到这个页面的时候就会收到这个值，然后放在页面里面。
//   // 下次请求的时候带上就可以了。
// });

















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

