var fs=require('fs');
// 批量处理图片
fs.readFile('1.jpeg',function(err,origin_buffer){
  console.log(Buffer.isBuffer(origin_buffer));

  fs.writeFile('logo.jpeg',origin_buffer,function(err){
    if(err){
      console.log(err);
    }
  });

  var base64img=origin_buffer.toString('base64');
  console.log(base64img);
  var decodeImage=new Buffer(base64img,'base64');
  console.log(Buffer.compare(origin_buffer,decodeImage));
  fs.writeFile('logo_decode.png',decodeImage,function(err){
    if(err){
      console.log(err);
    }
  })
})