// 最小的k个数
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if(input==null){
        return null;
    }
    if(input.length<k){
        return [];
    }
    input.sort(function(a,b){
        return a>b;
    })
    var result = [];
    for(var i=0;i<k;i++){
        result.push(input[i]);
    }
    return result;
}