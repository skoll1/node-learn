// 向其他网站请求数据。
// var http=require('http');
// var options={
//   hostname:'www.baidu.com',
//   port:80,
//   path:'/',
//   method:'GET',
//   // header:'',
//   // agent:,
//   // auth
// };
// var req=http.request(options,function(res){
//   console.log(res);
//   res.setEncoding('utf8');
//   res.on('date',function(chunk){
//     console.log(chunk);
//   });

// })
// req.on('error',function(err){
//   console.log('错误'+err);
// });

// req.on('socket',function(socket){
//   // 检测到分配端口触发的事件。
//   socket.setTimeout(1000);
//   socket.on('timeout',function(){
//     req.abort()
//   })
// })
// // 还有一个是分配端口超时？
// req.setTimeout(1000,()=>{
//   req.abort();
// })
// req.end();



// 自己写的爬虫
// 别人的框架爬虫
// 现在是爬取固定数据没问题
// ajax数据

var http=require('http');
var cheerio=require('cheerio');
var superagent=require('superagent');

// var iconv = require('iconv-lite');

// var url='https://movie.douban.com/chart';

// http.get(url,function(res){
//   var chunks=[];
//   res.on('data',function(chunk){
//     chunks.push(chunk)
//   })

//   res.on('end',function(){
//     var title=[];
//     // var html=iconv.decode(Buffer.concat(chunks),'gb2313')
//     // console.log(html);
//     console.log(chunks)
//   })
// })

// cNode api
var url='https://cnodejs.org/';
var data=new Map();
superagent.get(url)
                  .set('Referer','https://www.baidu.com')
                  .set('Accept','*')
                  .end(function(err,res){
                      if(err){
                        return next(err);
                      }
                      // console.log(res.text);
                      // 
                      var $=cheerio.load(res.text)
                      // var $=cheerio.load(res.text,{
                      //     ignoreWhitespace:true,
                      //     xmlMode:true
                      // })
                      // cherrio第一步，加载html(也可能需要其他的修饰)
                      var item=[];
                      var header=$('.header a')
                      var headerObject={};
                      var link;
                      var name;
                      header.each((i,elem)=>{
                        let obj={};
                        var name=$(elem).text();
                        // 获取文本
                        var attr=$(elem).attr('href');
                        // 获取和修改属性
                        // var html=$(elem).html();
                        // var parent=$(elem).parent();
                        obj={
                          attr,
                          // parent,
                          name,
                        }
                        data.set(name,obj);
                      })
                       console.log(data)

                    })
for(item of data.entries()){
  console.log(item);
}

// removeAttr():其余的jquery操作需要么？那就是做代理网站，直接扒页面，然后自己加css.calss样式
// hasClass();
// addClass();
// removeClass();
// find()
// parent()
// next()
// prev()
// siblings()
// children()


// each()
// map()
// filter()

// first()
// last()
// eq()

// 甚至还有这些东西
// append()
// after()
// remove()
// replaceWith()
// clone()


// toArray():把dom转换为数组
