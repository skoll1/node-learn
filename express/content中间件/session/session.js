// session是在验证登录名之后才加入的。
// 实现功能1：登录的时候将session存入数据库，
// 2:根据session进行页面拦截。
var express=require('express');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var MongoStore=require('connect-mongo')(session);
var mongoose=require('mongoose');
var dbUrl='mongodb://localhost:27017/sessionTest';
// 重新使用现有连接
// 配置mongoose新连接（此次使用的就是这个）

var app=express();
app.listen(8080);

app.use(cookieParser());
app.use(session({
  secret:'recommand 128 bytes random string',
  // 这个值怎么搞、、、通过设置的secret字符串，来计算hash值并放在cookie中，使之产生的signCookie防篡改。
  cookie:{
          maxAge:60*1000,
          path:'/',
          httpOnly:true,
          secure:false,
          // true的时候,需要启用https网站，安全的cookie需要https。
          },
  // 存放session Id的cookie的相关选项
  name:'skoll',
  // 保存sessionId的字段名称。
  rolling:false,
  // 每次请求都要重新设置一个cookie
  // genid:
  // 产生一个新的sessionId时所使用的函数。
  resave:true,
  // 即使session没有被修改，也保存session的值，默认为true.
  // store:new MongoStore({
  //   url:dbUrl,
  //   collection:'sessions',
  //   ttl:14*24*60*60,
  //   // 会话有效期14天
  //   autoRemove:'native'
  // })
  // session的存储方式：session默认使用内存来存session，对于开发调试来说很方便，但是不方便进程之间共享，因此需要使用数据库来缓存session.
}))



// app.get('/',function(req,res){
//   if(req.session.isVisit){
//     req.session.isVisit++;
//     console.log(req.session)
//     res.send('ok');
//   }else{
//     // res.cookie('isVisit',1,{maxAge:60*1000});
//     // 不是不可以这样设置cookie的么？
//     // res.send('1');

//     req.session.isVisit=1;
//     res.send('第一次来这里么？');
//     console.log(req.session);
//   }
// });

// cookie的问题：cookie中所有的数据可以在客户端修改，数据非常容易被伪造，而且如果cookie中数据字段太多会影响传输效率。
// session：把数据留在客户端。session可以存放在内存，cookie本身，redis等缓存中，放在客户端不是太推荐


// app.get('/',function(req,res){
//   if(req.session.sign){
//     console.log(req.session);
//     res.send('welcome'+req.session.name+'再次光临');
//   }else{
//     req.session.sign=true;
//     req.session.name='汇智网';
//     res.end('welcome');
//   }
// });


// session存储的利弊：内存(开发环境选这个)，cookie,缓存，数据库

// cookieSessionId不用担心状态共享问题，因为session的data不是由服务器保存的，而是保存在用户浏览器端，每次用户访问的时候。都会自动带上他的信息，弊端是加大了传输量，利端是方便

// 缓存是最常用的方式了，即快，又能共享状态。相比cookie session来说，当session data比较大的时候，可以节省网络传输。

// 数据库session.

// 数据库存储session实例


