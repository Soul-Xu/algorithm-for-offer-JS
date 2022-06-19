// 旋转数组的最小数字
function minNumberInRotateArray(rotateArray)
{
    // write code here
    rotateArray.sort(function(a,b){
        if(a<b){
            return -1;
        }
        else
            return 1;
        
    })
    return rotateArray[0];
}