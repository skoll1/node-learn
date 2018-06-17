var express=require('express');
var app=express();
app.listen(8080)


// app.locals:一旦设置，app.licas属性的值在整个应用程序的生命周期都持续存在，和仅在请求声明周期有效的req.licaks属性相反。
// 可以在模板中访问这个数值。

// ？app.mountpath:安装子应用程序的一个或多个路径模式。--app.on()也和这个有关。



// app.all:对于印射特定路径前缀或任意匹配的“全局”逻辑非常有用.
// 不是从任何http方法派生出来的，而是在所有http请求方法的指定路径上加载中间件。
app.all("*",requireAuthtication,loadUser);
// 将这个路由放在其他路由的上边，意味着从这个开始所有的路由需要身份验证。

app.all('/api/*',requireAuthtication);
// 只有需要api路径的才需要验证。


// app.delete():就是简单的delete操作，目前还没收到过，只是get,post操作。


// app.disable():给一个属性设置布尔值为false==app.set(name,false);

// app.enable():和上边的相反。

// app.disables():检查他是否被上面那个操作，操作了？

// 类似的app.enabled()


// app.engines:和引擎模板有关.但是我不用模板啊。



// app.set():设置一个值
// app.get():得到一个值。这是强行在里面运行一种语言啊。没必要啊。


// app.get():路由操作

// app.listen('/tmp/sock'):启动一个UNIX套接字并侦听给定路径上的连接。

// app.listen(8080,hostname,function(){})

// 其他http操作方法
// app.get()
// app.post()
// app.delete()
// app.put()
// 



// app.param(name,cb):添加路由参数的回调函数。当:name路由路径出现的时候，将触发这个函数
// app.param('user', function(req, res, next, id) {
//   User.find(id, function(err, user) {
//     if (err) {
//       next(err);
//     } else if (user) {
//       req.user = user;
//       next();
//     } else {
//       next(new Error('failed to load user'));
//     }
//   });
// });


// app.path():规范应用程序的路径
var app = express()
  , blog = express()
  , blogAdmin = express();

app.use('/blog', blog);
// 这样的就是子应用么？
blog.use('/admin', blogAdmin);

console.log(app.path()); // ''
console.log(blog.path()); // '/blog'
console.log(blogAdmin.path()); // '/blog/admin'


// app.route():返回单个路由的实例，那就没有必要了吧。

// app.set():注意这里可以实现用用程序的设置。
// 代理设置


// app.use()：使用中间件。