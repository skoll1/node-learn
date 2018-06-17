// res对象表示express应用程序在获取http请求时发送的http响应。


var express=require('express');
var app=express();
app.listen(3000);


app.get('/',(req,res)=>{
  // 这还有要求，先req,在res.
  console.log(res.headersSent); // false
  res.append('name','libateer')
  // res.send('OK');
  res.redirect('https://www.baidu.com')
  // console.log(res.headersSent);
  console.log(res.locals)
})

// res.locals:包含响应局部变量作用域的请求，只是用在该请求的响应周期内。否则，这个属性和app.lcoals完全一样
// 对于显示请求级别的信息很有用。


// res.append()添加请求头

// res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
// 添加cookie

// res.clearCookie(name,{options})

// res.download('/repeat.pdf','report.pdf',function(err){
//   if(err){

//   }else{

//   }
// })


// res.end():结束响应过程。（这个是用于没有数据进行响应的情况下快速结束响应）

// res.format():在请求对象http标头上执行的内容协商选项。（使用req.accepts()根据其致良知的排序的可接受类型为请求选择的一个处理程序）
// res.format({
//   'text/plain': function(){
//     res.send('hey');
//   },

//   'text/html': function(){
//     res.send('<p>hey</p>');
//   },

//   'application/json': function(){
//     res.send({ message: 'hey' });
//   },

//   'default': function() {
//     // log the request and respond with 406
//     res.status(406).send('Not Acceptable');
//   }
// });



// res.json()
// res.jsonp()

// res.links():分页的时候用么？

// res.redirect(status,'/'):重定向

// res.render()

// res.send():发送Buffer对象，String对象或者一个array对象


// res.sendFile():这个sendFile()只能发送页面文件么还是？
// app.get('/file/:name', function (req, res, next) {
//   var options = {
//     root: __dirname + '/public/',
//     dotfiles: 'deny',
//     headers: {
//         'x-timestamp': Date.now(),
//         'x-sent': true
//     }
//   };

//   var fileName = req.params.name;
//   res.sendFile(fileName, options, function (err) {
//     if (err) {
//       next(err);
//     } else {
//       console.log('Sent:', fileName);
//     }
//   });

// });


// 一堆和req重复的方法，好像没什么卵用的东西啊。
// res.sendStatus()
// res.set()
// res.status()
// res.type()



var router = express.Router();

router.param('user_id', function(req, res, next, id) {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id: id,
    name: 'TJ'
  };
  next();
});

router.route('/users/:user_id')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.json(req.user);
})
.put(function(req, res, next) {
  // just an example of maybe updating the user
  req.user.name = req.params.name;
  // save user ... etc
  res.json(req.user);
})
.post(function(req, res, next) {
  next(new Error('not implemented'));
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});
// 更细粒度的就是这样的写法