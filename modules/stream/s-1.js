var fs=require('fs');

var out=fs.createWriteStream('./10000.txt');
for(var i=0;i<10000;i++){
  var flag=out.write(i.toString()+',');
}

out.on('drain',function(){
  console.log('内存中的数据以全部取出，可以继续写入了');

})