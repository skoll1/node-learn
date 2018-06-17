// 变为模型
var db=require('./db');
// 实例model是文件，文件由很多自己的内置方法。我们也可以自定义文档实例方法
var mongoose=require('mongoose');
var loginSchema=require('./user');

var login=db.model('login',loginSchema);


module.exports=login;