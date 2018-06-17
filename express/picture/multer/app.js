var fs = require('fs');
var express = require('express');
var multer  = require('multer');
var app = express();
//配制multer参数，设置上传的文件存储路径为upload

// 存储引擎
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});


var upload = multer({storage:storage,limits:{fileSize:160000}});
// 这里里面可以控制上传文件的大小，类型

//.single(fieldname) - 单个文件上传
// app.post('/upload-single',upload,function (req,res,next) {
app.post('/upload-single',upload.any(),function (req,res,next) {
  // 接受任何的文件
    var files=req.file;
    console.log(files);

    // fs.rename(req.file.path,'upload/'+req.file.originalname,function(err){
    //   if(err){
    //     throw err;
    //   }
    // });


    // for(var i=0;i<req.files.length;i++){
    //     fs.rename(req.files[i].path,'upload/'+req.files[i].originalname,function(err){
    //       if(err){
    //         throw err;
    //       }
    //     });
    //     console.log('文件'+i+'上传成功！')
    // }
    res.send('upload success!');
});
//处理form的get请求，渲染html页面
app.get('/form', function(req, res, next){
    //读取根目录的html文件
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    //渲染html
    res.send(form);
});
app.listen(3009,function () {
    console.log("server at 3008 port");
});