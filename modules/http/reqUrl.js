// var http=require('http');
// var s=http.createServer((req,res)=>{
//   if(req.url!=='favicon.ico'){
//     req.on('data',(data)=>{
//       // console.log(data.toString('utf-8'));为什么会出现乱码
//       console.log(decodeURIComponent(data))
//     })
//     req.on('end',()=>{
//       console.log('end')
//     })
//     res.end('ok');
//   }
// })
// s.listen(8080);

var url=require('url');
var querystring=require('querystring');
var http=require('http');
var s=http.createServer((req,res)=>{
  console.log(req.url);
  // 这个是search查询字符串
  var getQuery=url.parse(req.url).query;
  // 用url模块找到query字符串。
  console.log(getQuery)
  var change=querystring.parse(getQuery);
  console.log(change)
  // console.log(req)
  // 这样的方法只能获取get方法提交的数据
  res.end('ok')
})
s.listen(8080);