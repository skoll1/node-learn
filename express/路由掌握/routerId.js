// 1:路由处理是中间件，可以实现授权机制，在特定页面上显示特殊优惠。
// 2：路由路径和正则参数
var app=require('express')();


// 路由参数
var staff={
  beijing:{
    a:{name:"aaaaa"},
    b:{name:"bbbbb"}
  },
  hangzhou:{
    c:{name:"ccccc"}
  }
}

app.get('/staff/:city/:name',function(req,res){
  var info=staff[req.params.city][req.params.name];
  // 路由参数可以有多个参数
  // name和city会和任何的字符串匹配，并将其和name放入req.params中

  // 这个参数再怎么传，一开始也是从后端传过去的吧。那一开始是怎么组织路由参数的。
  if(!info){
    return next()
  }
  res.send(info)
})

app.listen(3000,function(){
  console.log('端口监听：3000')
})



// 路由组织的方式
// 1：按模块对路由进行分类

// 其他的路由文档express-namespace
// express-resouce

