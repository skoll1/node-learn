// 建立用户模式
// item
var mongoose=require('mongoose');

var loginSchema = new mongoose.Schema({
  // 定义的时候要进行验证
  name:{
    type:String,
    require:true,
    unique:true
  },
  liveing:Boolean,
  // 定义布尔值
  binary:Buffer,
  password:{
    type:String,
    require:true
  },
  job:{
      type:String,
      require:true,
  },
  phone:Number,
  age:{
    type:Number,
    min:0,
    max:120,
    default:10
  },
  city:{
    type:String,
    enum:['北京','上海']
  },
  des:{
    type:String
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
  }
})
// 允许的SchemaTypes是string,number,date,buffer,blloean,


// 数据库索引











// 这里属于中间键的范畴，是一种控制函数，类似插件，可以控制流程中的init,validate,save,remove方法
// 下面的属于串行中间件
loginSchema.pre('save',function(next){
  // 做点什么。。。。
  if(this.isNew){
    this.meta.createAt=this.meta.updateAt=Date.now()
  }else{
    this.meta.updateAt=Date.now();
  }
  next();
})

// 还有一种并行中间件，可以提供更加细粒度的操作。


// 还有注册中间件:post挂钩是为了这些方法注册传统事件侦听器的一种方法。好像就是来告诉你的样子
loginSchema.post('save',function(doc){
  console.log('这个元素已经保存了',doc._id)
})
// 静态方法：model层就可以使用，这么重要竟然没注意到。。。。。
loginSchema.statics={
  fetch:function(cb){
    return this.find({}).sort('meta.updateAt').exec(cb)
  }
  ,
  findById:function(id,cb){
    return this.findOne({_id:id}).exec(cb)
  }
}


// 实例方法：为后面的Model和Entity提供公共的属性，还可以提供公共的方法，具体的实例才可以使用
loginSchema.methods.show=function(){
    var greeting=this.name?'my name is'+this.name:'no name'
}
module.exports=loginSchema;