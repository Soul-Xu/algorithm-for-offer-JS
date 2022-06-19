// 变态跳台阶
function jumpFloorII(number)
{
    // write code here
    if(number==1){
        return 1;
    }
    if(number==2){
        return 2;
    }
    else
        return 2*jumpFloorII(number-1);
}