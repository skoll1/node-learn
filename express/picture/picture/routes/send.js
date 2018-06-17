var express = require('express');
var router = express.Router();
var fs=require('fs');
var path=require('path');
var multer=require('multer');
var photo=require('../modules/photo/photo');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload');
        // 这块是自动生成还是需要第一次建立文件夹。
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


var upload = multer({storage:storage,limits:{fileSize:1600000}});
// 逐渐加东西就不行了。
router.get('/',function(req,res){
  res.send('haha');
});

router.post('/',upload.single('iName'),function (req,res,next) {
  // 接受任何的文件
    var files=req.file;
    var name=files.filename;
    var path=files.path;

    console.log(files);

    // 
    photo.create({
        name:name,
        path:path
    },function(err){
        if(err){
            console.log('保存'+err);
        }
        else{
            console.log('保存ok')
        }
    })
    res.send('upload success!');
});


module.exports = router;