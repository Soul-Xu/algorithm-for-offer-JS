// 构建乘积数组
function multiply(array)
{
    // write code here
     var B=[];
    B[0]=1;
    B[1]=array[0];
    for(var i=2;i<array.length;i++){
        B[i]=B[i-1]*array[i-1];
    }
    var sum=1;
    for(var i=array.length-2;i>=0;i--){
        sum=sum*array[i+1];
        B[i]=B[i]*sum;
    }
    return B;
}
module.exports = {
    multiply : multiply
};