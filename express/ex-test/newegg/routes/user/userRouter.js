var express=require('express');
var login=require('../../db/module.js');
// console.log(login)
// 写了的东西必须输出啊。


var mongoose=require('mongoose');
var router=express.Router();

// 图片上传准备
var multer=require('multer');
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
     destination: function (req, file, cb) {
           cb(null, './public/uploads')
        //如果这个是字符串的话，必须要你创建这个文件夹。    
      }, 
     

    //给上传文件重命名，获取添加后缀名
     filename: function (req, file, cb) {
         var fileFormat = (file.originalname).split(".");
         cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
     }
    //  用于确定文件夹中文件名的确认，如果没有，会为每个文件设置成一个随机文件名，而且没有扩展名。
});  

var upload=multer({
    storage:storage,
    // limits:
})
// console.log(upload);

// var imgUpLoad=upload.fields([{
//     name:'photograph',
// }])
router.post('/signup',upload.single('photograph'),function(req,res,next){
    var _user=req.body;
    let file=req.file;
    if(file.filename){
      _user.photograph=`uploads/${file.filename}`;
    }
    // console.log(file)
    console.log(_user)
    

    if(_user){
        login.find({shortName:_user.shortName},function(err,user){
            if(err){
                console.log('err')
            }
            if(user.length){
                console.log('可以登录了，傻孩子')
                // return res.redirect('../signin.html')
                return res.json({
                    msg:'账户名已存在',
                    redirect:'signup'
                })
            }else{
                console.log('开始保存吧')
    
                var user=new login(_user);
                user.save(function(err,user){
                    // 1:err
                    // 2:保存的文档对象
                    if(err){
                        console.log('保存失败')
                        console.log(err)
                        return res.json({
                            msg:'注册失败,please try again',
    
                        })
                    }
                    return res.json({
                        msg:"注册成功",
                        redirect:'info'
                    })
                    // res.redirect('../signin.html')
                })
            }
        })  
    }else{
        return res.json({
            msg:'表单为空，不能提交'
        })
    }
})
// 我所为什么一嵌套就不行了，原来是参数变了，虽然名字一样，但是值完全不同了甚至还是一个新的值，哈撒尅。

router.post('/signin',function(req,res){
    var user=req.body
    // console.log(user)
    var name=user.shortName
    console.log(name)
    var password=user.password

    // 判断是否登录

    // var _user=req.session.user
    // if(_user){
    //     app.locals.user=user;
    // }

    login.findOne({shortName:name},function(err,user){
        if(err){
            console.log(err)
        }

        if(!user){
            console.log('没有用户')
            return res.json({
                msg:'没有用户',
                redirect:'signup'
            })
            // return res.redirect('../signup.html')
        }

        user.comparePassword(password,function(err,isMatch){
            if(err){
                console.log(err);
            }

            if(isMatch){
                console.log('登录成功')
                req.session.user=user;
                // res.redirect('../index.html')
                return res.json({
                    msg:'登录成功',
                    info:req.session.user.shortName,
                    redirect:'index'
                })
                // 密码不对就返回找回密码页面
            }else{
                // return res.redirect('../lose.html') 
                return res.json({
                    msg:"密码不正确",
                    redirect:'lose'
                })
            }
        })
    })
})

router.get('/logout',function(req,res){
    console.log(req.session.user)
    delete req.session.user;
    console.log('安全退出')
    
    res.redirect('../index.html',{
        name:'libateer'
    })
})

router.get('/test',signinRequire,adminRequired,function(req,res){
    return res.json({
        msg:"test"
    })
})

function signinRequire(req,res,next){
    var user=req.session.user
    // console.log(user)
    if(user){
        next()
    }else{
        return res.json({
            msg:'需要登录',
            redirect:'signup'
        })
    }
    next()
}

// 这个中间件为什么用不了
function adminRequired(req,res,next){
    var user=req.session.user;
    console.log(user)
    if(user.role===0){
        return res.json({
            msg:'你是普通用户，没有权限查看高级的信息'
        })
    }else{
       return res.json({
           msg:'什么都没有？'
       })

    }
    next()
}

// 可以通过使用中间件来控制数据的流向节奏

function savePhoto(req,res,next){
    let files=req.file;
    if(files){
       req.photograph=`uploads/${files.filename}`;
       console.log(req.photograph)
       next()
    }else{
       next() 
    }
   
}
module.exports=router;