// 包含min函数的栈
var result=[]
function push(node)
{
    // write code here
    return result.push(node)
}
function pop()
{
    // write code here
    return result.pop()
}
function top()
{
    // write code here
    return result.length>0?result[result.length-1]:null;
}
function min()
{
    // write code here
    if(result.length==0||result==null) return;
    var min=result[0];
    result.map(function(a){
        if(a<min){
            min=a;
        }
    })
    return min;
}
