const cluster=require('cluster');
const http=require('http');
if(cluster.isMaster){
  cluster.setupMaster({
    silent:true
  });
  var worker=cluster.fork();
  // console.log(worker)
  worker.process.stdout.on('data',(data)=>{
    console.log(data.toString('utf8'));
  });
}else{
  http.createServer((req,res)=>{
    res.end('ok');
    process.stdout.write(req.url)
  }).listen(4040)
}