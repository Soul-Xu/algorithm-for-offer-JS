// 数组中重复的数字
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    if(numbers==null) return false;
    if(numbers.length==1) return false;
    for(var i=0;i<numbers.length;i++){
        if(numbers.indexOf(numbers[i]) != numbers.lastIndexOf(numbers[i])){
            duplication[0]=numbers[i];
            return true;
        }
    }
    return false;
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
}
module.exports = {
    duplicate : duplicate
};