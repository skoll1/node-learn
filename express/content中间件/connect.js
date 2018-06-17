var connect=require('connect');
var app=connect();

// 
// app.use(log);
// app.use(hello);

//挂载中间件和服务器

app.use('/admin',restrict);
// 验证是有效的

app.use('/admin',admin)
// 呈现页面

app.listen(8080);



























// 日志中间件
function log(req,res,next){
  // console.log('%s %s',req.method,req.url);
  console.log("log");
  next();
}
function hello(req,res,next){
  console.log('hello')
  res.setHeader('Connect-Type','text/plain');
  res.end('hello');
  next();
}









function restrict(req,res,next){
  console.log('restrict')
  // basic认证
  // var authorization=req.headers.authorization;
  // console.log(req.headers)
  // if(!authorization){
  //   return next(new Error('no authorization'))
  // }

  // var parts=authorization.split(' ');
  // console.log(parts);
  // var scheme=parts[0];
  // var auth=new Buffer(parts[1],'base64').toString().split(":");

  // var user=auth[0];
  // var pass=auth[1];
  // var ok=false;
  var ok=true;
  // 查询数据库
  if(!ok){
    return next(new Error('error'))
  }else{
    next();
  }

}


function admin(req,res,next){
    console.log('admin')
    switch(req.url){
      case '/':
        res.end('try /users');
        break;
      case '/users':
        res.setHeader('Connect-Type','application/json');
        res.end(JSON.stringify(['libateer','hello','world']));
        break;
    }
}


