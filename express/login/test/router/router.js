var express=require('express');
var login=require('../module');

var mongoose=require('mongoose');

var router=express.Router();
// router.get('/test',function(req,res){
//   res.send('hahahahha')
// });



router.post('/zhuce',function(req,res){
    var user=req.body;
    var _user=new login(user);


    _user.save(function(err,_user){
      if(err){
        console.log(err);
      }
      console.log(_user)
    })
    res.send('ok')
    // 终于卡了三天的完成了。
});


// 注意输出还得

module.exports=router;