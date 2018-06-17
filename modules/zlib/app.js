var zlib=require('zlib');
var gzip=zlib.createGzip();
// 里面有个options参数
var fs=require('fs');

var input=fs.createReadStream('./1.html');
var out=fs.createWriteStream('./test.txt.gz');

input.pipe(gzip).pipe(out);
console.log('ok')