var app=require('express')();

// 首先创建一个域
app.use(function(req,res,next){
  var domain=require('domain').create();

  domain.on('err',function(err){
    try{
      // 5秒内故障保护关机
      setTimeout(function(){
        console.error('Fial');
        process.exit(1)
      },5000);

    }
  })
})

// 会话数据的存储。