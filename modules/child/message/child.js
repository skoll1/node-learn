process.on('message',(data)=>{
  console.log(data);
})

process.send({name:'son'})