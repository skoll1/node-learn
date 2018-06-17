var dns=require('dns');

// dns.resolve('www.baidu.com','A',(e,r)=>{
//   if(e){
//     console.log(e);
//   }else{
//     console.log(r);
//     // 将域名转为Ip地址
//   }
// })

// dns.resolve6('www.google.com',(err,address)=>{
//   console.log(address)
// })


// dns.resolveMx('baidu.com',(err,address)=>{
//   // 邮件交换服务器记录
//   console.log(address)
//   // 请求的资源被拒接，没有权限。
// });

// dns.resolveTxt('baidu.com',(err,data)=>{
//   // 获取TXT记录
//   console.log(data);
// })

// dns.resolveSrv('google.com',(err,data)=>{
//   // 获取srv记录：失败
//   console.log(data)
// })

// dns.resolveNs('baidu.com',(err,address)=>{
//   // 获取NS记录
//   console.log(address);
// });


// dns.resolveCname('baidu.com',(err,address)=>{
//   console.log(address);
//   // 获取别名记录
// })








// 将一个域名转为IP地址
// dns.lookup('baidu.com',6,(err,address,family)=>{
//   console.log(family);
//   console.log(err)
//   // family是获取到的地址类型
// })


// 将一个IP地址转为域名
dns.reverse('220.181.57.217',(err,address)=>{
  console.log(address);
  // 未发现任何域名，但是浏览器可以打开。。。。。
  console.log(err)
})


