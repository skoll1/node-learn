var mg=require('mongoose');
var bcrypt=require('bcrypt');
var SALT_WORK_FACEOR=10;

var loginSchema=new mg.Schema({
  infoName:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true,
  },
  // 根据数字来区别登录人群

  // 1-10:对用户的信息进行细分
  // user:0
  // vip user:1
  // super user:2

  // 10~
  // admin:10
  // super admin:50


  role:{
    type:Number,
    default:0
  }
});

loginSchema.pre('save',function(next){
  var user=this;

  bcrypt.genSalt(SALT_WORK_FACEOR,function(err,salt){
    if(err){
      return next(err);
    }

    bcrypt.hash(user.password,salt,function(err,hash){
      if(err){
        return next(err);
      }

      user.password=hash;
      next();
    });
  });
});

loginSchema.methods={
  comparePassword:function(_password,cd){
    bcrypt.compare(_password,this.password,function(err,isMatch){
      if(err){
        return cd(err);
      }
      cd(null,isMatch);
    });
  }
}
module.exports=loginSchema;