var db=require('./db');
var mg=require('mongoose');
var loginSchema=require('./user');

var login=db.model('login',loginSchema);
module.exports=login;