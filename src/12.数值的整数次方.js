// 数值的整数次方
function Power(base, exponent)
{
    // write code here
    if(exponent==0){
        return 1;
    }
    var result = 1;
    if(exponent>0){
        for(var i=1;i<=exponent;i++){
            result *= base;
        }
        return result;
    }
    if(exponent<0){
        exponent = Math.abs(exponent);
         for(var i=1;i<=exponent;i++){
            result *= base;
        }
        result = 1/result;
        return result;
    }
}