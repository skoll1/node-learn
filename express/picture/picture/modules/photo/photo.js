var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/photo',{ useMongoClient: true });


const db=mongoose.connection;
db.on('error',function(err){
  console.log(err+'err');
})
db.once('open',function(){
  console.log('ok');
})
var schema=new mongoose.Schema({
  name:String,
  path:String
});

module.exports=mongoose.model('Photo',schema);
