// 代理服务器

// 1：提高访问速度：通常代理服务器都会设置一个较大的缓冲区，当有外界的信息通过时，同时也将其保存到缓冲区中，当其他的用户在访问的时候，则由缓冲区直接取出信息，然后传给用户
// 2：控制对内部资源的访问：大学FTP，可以直接使用教育网内地址免费下载各类资源。
// 3：过滤内容，限制对特定计算机的访问，将一种语言的数据翻译成另一种语言，或者防御代理服务器两边的攻击性访问。
// 4：隐藏真实IP,上网者可以通过代理服务器隐藏自己的ip，面授攻击。
// 5：访问外国网站
// 6：突破内容过滤机制的现值，访问被过滤网站。
var http = require('http');
var net = require('net');
var url = require('url');

// function request(cReq, cRes) {
//     var u = url.parse(cReq.url);

//     var options = {
//         hostname : u.hostname, 
//         port     : u.port || 80,
//         path     : u.path,       
//         method     : cReq.method,
//         headers     : cReq.headers
//     };

//     var pReq = http.request(options, function(pRes) {
//         cRes.writeHead(pRes.statusCode, pRes.headers);
//         pRes.pipe(cRes);
//     }).on('error', function(e) {
//         cRes.end();
//     });

//     cReq.pipe(pReq);
// }

// http.createServer().on('request', request).listen(8888);

var ser=http.createServer((sreq,sres)=>{
    var url_parts=url.parse(sreq.url);
    var options={
        host:'www.baidu.com',
        port:80,
        path:url_parts.pathname,
        headers:sreq.headers
    };
    // console.log(options)
    var creq=http.get(options,(cres)=>{
        sres.writeHead(cres.statusCode,cres.headers);
        cres.pipe(sres);
    }).on('error',(e)=>{
        console.log(e);
    })
    console.log(creq);
    sreq.pipe(creq);

})
ser.listen(1338);