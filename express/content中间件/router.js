var parse=require('url').parse;

module.exports=function route(obj){
  return function(req,res,next){
    if(!obj[req.method]){
      next();
      return;
    }

    var routers=obj[req.method];
    // console.log(routers);
    // console.log(obj)
    var url=parse(req.url);
    var paths=Object.keys(routers);
    // console.log(paths)

    for(var i=0;i<paths.length;i++){
      var path=paths[i];
      var fn=routers[path];

      path=path.
                replace(/\//g,'\\/')
                .replace(/:(\w+)/g,'([^\\/]+)');



    }                                                                                                                                                                                                                                                                                                                                                                       


  }
}