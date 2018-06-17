// 连接数据库
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/libateerlogin');
const db=mongoose.connection;
db.on('error',function(err){
  console.log(err+'err')
})

db.once('open',function(){
  console.log('ok');
})
module.exports=db;


// 参照上一个观点，现在要看的是这个数据库开启文件是放在哪里。