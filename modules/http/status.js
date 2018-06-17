// 创建一个简单的静态文件服务器
// 用pipe()优化数据传输。
// 通过设定状态码处理用户和文件系统错误。


var http=require('http');
var parse=require('url').parse;
var join=require('path').join;
var fs=require('fs');

var root=__dirname;
var server=http.createServer(function(req,res){
  var url=parse(req.url);
  var path=join(root,url.pathname);

  // 1
  // var stream=fs.createReadStream(path);
  // stream.pipe(res);
  // // 优化后。
  // // stream.on('data',function(chunk){
  // //   res.write(chunk);
  // // });
  // // stream.on('end',function(){
  // //   res.end();
  // // })

  // // 错误管理机制：为了防止服务器被错误搞垮，我们要监听错误，
  // stream.on('error',function(err){
  //   // 在node中，所有继承了EventEmitter的类都可能发出error事件。
  //   res.statusCode=500;
  //   res.end('interbal Server Error');
  // })


  // 2：扩展上面：检查文件是否存在
  fs.stat(path,function(err,stat){
    if(err){
      if('ENOENT'==err.code){
        res.statusCode=404;
        res.end('not found');
      }
      else{
        res.statusCode=500;
        res.end('internal Server Error');
      }
    }else{
      res.setHeader('Content-Length',stat.size);
      var stream=fs.createReadStream(path);
      stream.pipe(res);
      stream.on('error',function(err){
        res.statusCode=500;
        res.end('internal Server Error');
      })
    }
  })
}).listen(8080)