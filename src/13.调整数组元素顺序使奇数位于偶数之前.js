// 调整数组元素顺序使奇数位于偶数之前
function reOrderArray(array)
{
    // write code here
    var result1 = [];
    var result2 = [];
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0){
            result1.push(array[i]);
        }
        else{
            result2.push(array[i]);
        } 
    }
    return result2.concat(result1);
}
