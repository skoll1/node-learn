// 必须登录
exports.signInRequire=function(req,res,next){
  var user=req.session.user;
  console.log('111111')
  if(!user){
    res.redirect('/signUp.html');
  }
  next();
}
exports.adminRequire=function(req,res,next){
  var user=req.session.user;
  console.log('22222');
  console.log(user);
  if(user.role>10){
    res.redirect('/admin.html')
  }
  // 这里是只做该做的？
  // 就是这个思想。
  next();
}