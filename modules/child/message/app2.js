// 自动重启
var fork=require('child_process').fork;
var cpus=require('os').cpus();
console.log(cpus);

var server=require('net').createServer();
server.listen(1337);

var workers={}
// 限制重启状态：避免频繁重启
var limit=10;
var during=60000;
var restart=[];
var isTooFrequently=function(){
  var time=Date.now();
  var length=restart.push(time);
  if(length>limit){
    restart=restart.slice(limit-1);
  }
  return restart.length>=limit&&restart[restart.length-1]-restart[0]<during;
};

var createWorker=function(){
  var worker=fork(__dirname+'/work.js');

  if(isTooFrequently){
    process.emit('giveup',length,during);
    return;
  }
  
  worker.on('message',(message)=>{
    if(message.act==='suicide'){
      createWorker();
    }
  })
  worker.on('exit',()=>{
    console.log(worker.id+'is exited');
    delete workers[worker.pid];
  });

  worker.send('server',server);
  workers[worker.pid]=worker;
  console.log('create'+worker.pid);
}

for(var i=0;i<cpus.length;i++){
  createWorker();
}