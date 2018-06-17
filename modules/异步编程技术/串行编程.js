// 社区贡献的工具可以实现串行化控制nimble

// 自己模拟实现：把所有任务按预期的执行顺序放到数组里面。

var task=['task1','task2','task3'];
function next(err,result){
  if(err){
    throw err;
  }
  var currentTask=task.shift();
  if(currentTask){
    currentTask(result);
  }
}
next();