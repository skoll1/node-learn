var ex=require('express');
var login=require('../modules/user/module');
var mg=require('mongoose');
var bodyParser = require('body-parser');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var router=ex.Router();
var MongoStore=require('connect-mongo')(session);
var dbUrl='mongodb://localhost:27017/sessionTest';
mg.connect(dbUrl);
var app=ex();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
   secret:'recommand 128 bytes random string',
   name:'user',
   store:new MongoStore({
    url:dbUrl,
    collection:'sessions',
    ttl:14*24*60*60,
    // 会话有效期14天
    autoRemove:'native'
  })
}));
// app.use(session({
//   secret:'recommand 128 bytes random string',
//   cookie:{
//           maxAge:60*1000,
//           },
//   // 存放session Id的cookie的相关选项
//   // name:"user",
//   // // 保存sessionId的字段名称。
//   // rolling:false,
//   // // 每次请求都要重新设置一个cookie
//   // // genid:
//   // // 产生一个新的sessionId时所使用的函数。
//   // resave:true,
//   // 即使session没有被修改，也保存session的值，默认为true.
//   // store:new MongoStore({
//   //   url:dbUrl,
//   //   collection:'sessions',
//   //   ttl:14*24*60*60,
//   //   // 会话有效期14天
//   //   autoRemove:'native'
//   // })
//   // session的存储方式：session默认使用内存来存session，对于开发调试来说很方便，但是不方便进程之间共享，因此需要使用数据库来缓存session.
// }));

// app.use(passport.initizlize());
router.post('/',function(req,res){
  var _user=req.body;
  var name=_user.infoName;
  var password=_user.password;
  var csrf=_user._csrf;

  login.findOne({infoName:name},function(err,user){
    if(err){
      console.log(err+"错误");
    }


    if(!user){
      console.log('没有用户');
      res.redirect('/signUp.html');
    }else{
          user.comparePassword(password,function(err,isMatch){
          if(err){
            console.log(err);
          }
          if(isMatch){
             req.session.user=user;
             console.log('登录成功');
             console.log(req.session.user);
             // res.send({name:name});
             res.redirect('/');
          }else{
            console.log('错误的密码');
            res.redirect('/signUp.html')
            }
          });
        };
  });
});


router.get('/',function(req,res){
  // res.send(req.csrfToken());
  // 这就意味着我第一转到这个页面的时候就会收到这个值，然后放在页面里面。
  // 下次请求的时候带上就可以了。
})

router.get('/logout',function(req,res){
  delete req.session.user;
  res.redirect('/');
})
module.exports=router;