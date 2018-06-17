// 这里是用async那个包。以及控制并发

// 流程控制，集合，工具类

// node里面的async语法用koa的时候用吧。

var async=require('async');
var fs=require('fs');
// 多个任务依次执行:每个cb函数会将结果保存起来，然后执行下一个调用，直到所有的调用结束，队列里的保存的异步结果一数组的方式传入。


// ======串行=====
// async.series([
//     function(cb){
//       fs.readFile('1.html','utf8',cb);
//     },
//     function(cb){
//       fs.readFile('title.json','utf8',cb);
//     }
//   ],(err,results)=>{
//     if(err){
//       console.log(err);
//     }else{
//       console.log(results);
//     }
//   });

// 数组，对象都可以传

// async.series({
//   one:function(cb){
//        fs.readFile('1.html','utf8',cb);
//   },
//   two:function(cb){
//     fs.readFile('title.json','utf8',cb);
//   }
// },(err,datas)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(datas)
//   }
// });




// =====并行====
// async.parallel({
//   one:function(cb){
//     fs.readFile('1.html','utf8',cb);
//   },
//   two:function(cb){
//     fs.readFile('title.json','utf8',cb);
//   }
// },(err,datas)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(datas)
//   }
// })



// =====串行执行，但是waterFall之间有数据传递
// 只能数组
// async.waterfall([
//   function(cb){
//     fs.readFile('1.html',(err,content)=>{
//       cb(err,content);
//     });
//   },

//   function(arg1,cb){
//     // 传入上一个参数
//     console.log('arg1'+arg1);
//     fs.readFile('title.json',(err,content)=>{
//       cb(err,content);
//     });
//   }
//   ],(err,results)=>{
//     if(err){
//       console.log(err);
//     }else{
//       console.log('results'+results.toString());
//       // 最后返回的是最后一个。
//     }
//   })



// =====auto====:自动分析依赖关系，以最佳的顺序执行业务。
// 某些任务之间彼此独立，可以并行执行，但是某些任务需要依赖于其他业务执行完毕之后才能执行。

// async.auto({
//     get_data: function(callback) {
//         console.log('in get_data');
//         // async code to get some data
//         callback(null,'data', 'converted to array');
//         // 这个第一个数变成null是什么意思

//         // 回调函数第一个参数是error.如果没有就使用null,只要这个需要强调一下
//     },
//     make_folder: function(callback) {
//         console.log('in make_folder');
//         // async code to create a directory to store a file in
//         // this is run at the same time as getting the data
//         callback(null, 'folder');
//     },
//     write_file: ['get_data', 'make_folder', function(results, callback) {
//                                                      // 难道这个还要看先后么？
//         console.log('in write_file', JSON.stringify(results));
//         // once there is some data and the directory exists,
//         // write the data to a file in the directory
//         callback(null, 'filename');
//     }],
//     email_link: ['write_file', function(results, callback) {
//         console.log('in email_link', JSON.stringify(results));
//         // once the file is written let's email a link to it...
//         // results.write_file contains the filename returned by write_file.
//         callback(null, {'file':results.write_file, 'email':'user@example.com'});
//     }]
// }, function(err, results) {
//     console.log('err = ', err);
//     console.log('results = ', results);
// });



var currentCount=0;
console.log("will create a url list size 10 !");
var urls=[];
for(var i=0;i<10;i++){
 urls.push('http://www.example.com/'+i+".html");
}
async.mapLimit(urls,5,function(url,callback){
 var delay=parseInt(500);
 currentCount++;
 console.log("currentCount is :"+currentCount+",current url is :"+url+",use time is :"+delay+" mm");
 setTimeout(function(){
     currentCount--;
     callback(null,url+' html content ');
 },delay);
},function(err,result){
 console.log("result:");
 console.log(result);
});





// 控制并发连接数：mapLimit()方法。动态的添加数据，并发的时候。
