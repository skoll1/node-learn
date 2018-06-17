var db=require('./db');

// var mongoose=require('mongoose');
var loginSchema=require('./schema/user.js')

var login=db.model('login',loginSchema);
// 使用model()方法，将schema编译为Model。model的第一个参数是模型名称。

// 一定要将model()方法的第一个参数和其返回值设置成相同的值，否则会出现不可预知的后果

module.exports=login;