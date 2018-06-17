var mongoose=require('mongoose');
var bcrypt=require('bcrypt');
var SALT_WORK_FAXTOR=10;

var loginSchema=new mongoose.Schema({
    shortName:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    cName:{
        type:String,
        require:true,
    },
    eName:{
        type:String,
        require:true,
    },
    avatar:{
        type:String,
        // default:''
        require:true,
    },
    photograph:{
        type:String,
        require:true,
    },
    deparent:{
        type:String,
        require:true,
    },

    // 0 普通用户
    // 1 超级管理员
    role:{
        type:Number,
        default:0,
        require:true,
    },
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    },
    job:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:String,
        require:true,
    },
    hireDate:{
        type:Date,
        require:true,
    },
    sex:{
        type:String,
        require:true,
    },
    isSingle:{
        type:Boolean,
        require:true,
    },
    isWork:{
        type:Boolean,
        default:true,
        require:true,
    },
    hometown:{
        type:String,
        require:true,
    },
    signature:{
        type:String,
        require:true,
    },
    contributes:[
        {
            startTime:Date,
            endTime:Date,
            duty:String,
        }
    ],
    visit:{
        type:Number,
        default:0,
        require:true,
    },
    country:{
        type:String,
        default:"中国"
    }

})


loginSchema.pre('save',function(next){
    var user=this;
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now()
    }else{
        this.meta.updateAt=Date.now()
    }
    bcrypt.genSalt(SALT_WORK_FAXTOR,function(err,salt){
        if(err){
            return next(err);
        }
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err){
                return next(err);
            }
            user.password=hash;
            next();
        })
    })
})
loginSchema.methods={
    comparePassword:function(_password,cb){
        bcrypt.compare(_password,this.password,function(err,isMatch){
            if(err){
                return cb(err);
            }
            cb(null,isMatch);
        })
    }
}

// 
loginSchema.statics={
    fetch:function(cb){
        return this
                .find({})
                .sort('meta.updateAt')
        exec(cb)
    },
    findByName:function(name,cb){
        return this
                 .findOne({name:name})
                 exec(cb)
    }
}

module.exports=loginSchema;
