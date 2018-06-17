var mg=require('mongoose');

mg.connect('mongodb://localhost:27017/pictures',{ useMongoClient: true });
// mongoose.connect('mongodb://localhost:27017/photo',{ useMongoClient: true });
const db=mg.connection;

db.on('eror',function(err){
  console.log(err+"err")
})

db.once('open',function(){
  console.log('ok');
})
module.exports=db;