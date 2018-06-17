// node 的核心api都是轻量级和底层的。

// 想法，语法糖和具体细节都是社区模块完成的，社区成员利用底层api创建出有趣和易用的模块，帮助你把任务完成

//应用逻辑：由你的程序实现，这一层的大小是根据你的社区模块数量，以及程序的复杂度实现的。

var http=require('http');
var url=require('url');
var items=[];

var server=http.createServer(function(req,res){
  switch(req.method){
    case 'POST':
        var item='';
        req.setEncoding('utf-8');
        req.on('data',function(chunk){
          item+=chunk;
          // 简单的服务器缓存
        });

        req.on('end',function(){
          items.push(item);
          res.end('ok');
        })
        break;

    case 'GET':
        items.forEach(function(item,i){
          res.write(i+')'+item+'\n');
        });
        res.setHeader('Content-Length',Buffer.byteLength(body));
        res.setHeader('Content-Type','text/plain;charset="utf-8"');
        //设定Content-length会隐含禁用Node的块编码。因为要传输的数据变少，所以能提升性能。 
        res.end();
        break;

    case 'DELETE':
        var path=url.parse(req.url).pathname;
        var i=parseInt(path.slice(1),10);

        if(isNaN(i)){
          res.statusCode=400;
          res.end({err:'none this id'});
          // 检查数字是否有效
        }else if(!items[i]){
          res.statusCode=404;
          res.end('item not found!');
          // 是否在范围内
        }else{
          items.splice(i,1);
          res.end('ok');
          // 删除
        }
        break;
  }
}).listen(3000);
// setTimeout(()=>{
//   server.close();
// },3000)
// server 上面还有一堆事件
server.on('connection',function(){
  console.log('服务器在连接');
  // 打印两次，一次是用户发出的请求，另一次是浏览器为页面在收藏夹中的显示图标自动发送的请求。
});
server.on('listening',function(){
  console.log('服务器端开始监听！');
})

server.on('close',function(){
  console.log('服务器已关闭！');
})

server.on('request',function(req,res){
  console.log(req);
})

server.setTimeout(1000,function(){
  console.log('服务器连接超时');
  // 默认连接时间为2分钟
})
server.on('timeout',function(socket){
  server.timeout=2000;
  // 重新设置超时时间。
})

server.on('error',function(e){
  if(e.code=='EADDRINUSE'){
    console.log(’服务器端地址已被使用);
    server.listen(8080);
  }else{
    console.log(e);
  }
})
// 文件上传：formidable插件。
// 根据文件上传插件制作进度条。

 