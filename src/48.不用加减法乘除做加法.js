// 不用加减法乘除做加法
function Add(num1, num2)
{
    // write code here
     var sum = 0, tmp;
    do{
        sum = num1^num2;
        tmp = num1&num2;
        num1 = tmp << 1;
        num2 = sum;
    }while(tmp != 0);
    return sum;
}