// req

// 表示http请求.该req对象是Node自己请求对象的增强版本，支持所有的内置的字段和方法。那就是还要看原版的http文档。

var express=require('express');
var app=express();
app.listen(3000);

app.get('/user/:id',(req,res)=>{
  console.log(req.get('content-type'));
  res.send(req.params.id);
});

// 在新版本中，req.files,req.session必须使用处理中间件才可以使用。

// req.app():保存正在使用的中间件的express程序的实例的引用。这好像是插件里面用的吧

// req.baseUrl:router中间件里面查看的上一级地址。

// req.body:请求正文中提交的键值对数据。默认情况下为undefined,当使用中间件才可以访问

// req.cookies:当使用cookie解析器中间件的时候。此属性包含请求发送的Cookie对象，如果请求不包含cookie，则为空数组。

// req.fresh:请求是否新鲜。那就是跟http报头有关系

// req.hostname:包含从hostHttp头派生的主机名。客户端或代理设置？什么鸡儿意思？

// req.ip:请求的远程IP地址

// req.ips:

// req.method:请求方法的字符串

// req.originalUrl:请求的原始字符串（区分req.path,req.baseUrl,req.originalUrl）

// req.params:包含印射的路由参数的属性的对象。

// req.path:包含请求Url的路径部分
// example.com/users?sort=desc----users

// req.protocol:使用的协议

// req.query包含路由的每个查询字符串的属性的对象。 ----req.body----req.params
// 查询请按照以下顺序
// req.params
// req.body
// req.query






// req.route:当前匹配的路由。

// req.secure:是否建立了TLS连接

// req.signedCookies:签名cookie.

// req.stale:请求是否过时

// req.fresh:

// req.subdomains:请求域名中的子域数组。

// req.xhr:请求是否是ajax.


// 一些方法
// req.accepts():根据请求的acceptHttp头字段检查指定的内容类型是否可以接受，该方法返回最佳匹配，如果没有，返回false.
      // 应用程序响应406


// req.acceptsCharsets();
// req.acceptsEncodings();
// req.acceptsLanguages();


// req.get('Content-Type')
// 还有一个配套方法，来检测请求的content-type字段
// req.is('html')


// req.range()