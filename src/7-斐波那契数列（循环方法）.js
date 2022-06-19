// 斐波那契数列（循环方法）
function Fibonacci(n)
{
    // write code here
    if(n==0||n==1){
        return n;
    }
    var f1 = 0;
    var f2 = 1;
    for(var i =2;i<=n;i++){
        var tmp = f1 + f2;
        f1 = f2;
        f2 = tmp;
    }
    return tmp;
}
