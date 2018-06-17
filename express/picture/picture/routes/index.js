// 测试接口来用

var express = require('express');
var router = express.Router();
var fs=require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  var form=fs.readFileSync('./public/html/send.html',{encoding:'utf-8'})
  console.log(form)
  res.send(form);
  // 为什么这种方法不行么？
  // 不知道从什么时候这个又可以了，那么现在就有两种方法了。


  // res.send('可以上传了');
  // 刚才是POST，怪不得不能找到方法
});

router.get('/about',function(req,res,next){
  res.send('libateer/about')
})
module.exports = router;
