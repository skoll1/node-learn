var connect=require('connect');
var router=require('./router');
var app=connect();

var routers={
  GET:{
    '/users':function(req,res){
      res.end('libateer!');
    },
    '/users/:id':function(req,res,id){
      res.end('user'+id);
    }
  },
  DELETE:{
    '/users:id':function(req,res,id){
      res.end('delete user'+id)
    }
  }
};

connect()
    .use(router(routers))
    .listen(8080)




// 
// app.use(oLog(':method :url :headers'));
// app.use(hello);

function oLog(format){
  var re=/:(\w+)/g;
  return function logger(req,res,next){
      var str=format.replace(re,function(match,property){
        return  req[property];
      });
      console.log(str);
      next();
  }
}