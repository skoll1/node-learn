var connect=require('connect');
var cookieParser=require('cookie-Parse');
var app=connect();
     


      app.use(cookieParser())
          // 根据文件类型限制上传数据
          use(type('application/x-www-form-urlencode',limit('64kb')))



        .use(function(req,res){

          res.setHeader('Set-Cookie','foo=bar');
          res.setHeader('Set-Cookie','name=libateer');

          console.log(req.cookie)
          // res.send('hello')
          res.end('hello!');
        })
        .listen(8080);