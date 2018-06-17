var express = require('express');
var router = express.Router();
var fs=require('fs');
var path=require('path');
var multer=require('multer');
// var photo=require('../modules/photo/photo');
var photo=require('../modules/photo/photo');

router.get('/:id/download',function(req,res,next){
  var id=req.params.id;
  console.log(id);

  photo.find({_id:id},function(err,photo){
    if(err){
      return next(err);
    }else{
      console.log(photo);
      var path=photo[0].path;
      // 他为什么是个数组？
      console.log(path);
      // res.download(path);
      // res.send('ok')
      // 这样
      fs.createReadStream(path).pipe(res);
      // 并不能实现download.
    }
  });
});

// 图片目录显示
// router.get('/files',function(req,res,next){
//   var filePath=path.join(__dirname,'./');

//   fs.readdir(filePath,function)
// })
module.exports=router;