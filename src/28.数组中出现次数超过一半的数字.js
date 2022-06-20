// 数组中出现次数超过一半的数字
function MoreThanHalfNum_Solution(numbers)
{
    // write code here   
    var obj={};
    var len = numbers.length;
    numbers.map(function(num){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num]=1;
        }
    })
    for (var i in obj){
        if(obj[i]>Math.floor(len/2)) return i
    }
    return 0;
}