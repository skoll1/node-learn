var ex=require('express');
var login=require('../modules/user/module');
var mg=require('mongoose');
var router=ex.Router();

router.post('/',function(req,res){
  var user=req.body;
  var _user=new login(user);

  console.log(_user);
  // console.log(user)
  // res.send('ok')

  var fName=user.name;
  // 先找有没有之前注册过的。
  _user.save(function(err,_user){
    if(err){
      console.log("错误"+err);
    }else{
      res.redirect('/signUp.html');
      // 重定向到登录页面
    }
  });
});

module.exports=router;