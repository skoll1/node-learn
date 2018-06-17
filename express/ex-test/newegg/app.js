var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');
var compression=require('compression')
// var helmet=require('helmet');
// 这个的使用必须在cookie-parser后面

var mongoStore=require('connect-mongo')(session);
// router
var user=require('./routes/user/userRouter');

var multer=require('multer');
var storage = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
     destination: function (req, file, cb) {
         cb(null, './uploads')
    }, 
  //给上传文件重命名，获取添加后缀名
   filename: function (req, file, cb) {
       var fileFormat = (file.originalname).split(".");
       cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
   }
});  

var upload=multer({
  storage:storage
})



var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(compression())
// app.use(helmet())
// 压缩的要放在最前面
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'newEgg',
  name:'libateer',
  store:new mongoStore({
    url:'mongodb://localhost:27017/user',
    collection:'sessions',
    ttl:1*24*60*60,
    // 会话有效期，一天
    // autoRemove:'native',
    // httpOnly:true,
    // // secure:true,
    // domain:'localhost:4000',
    // cookie-session中可以定义的方式。
  })
}))


// router
app.use('/', express.static('./public/html'));
app.use('/user',user);
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


app.listen(4000)
// module.exports = app;

