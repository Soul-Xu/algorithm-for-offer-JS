// 矩形覆盖
function rectCover(number)
{
    // write code here
    if(number<=0){
        return 0;
    }
    if(number==1||number==2){
        return number;
    }
       
    var f1 = 0;
    var f2 = 1;
    for(var i=1;i<=number;i++){
        var tmp = f1 + f2;
        f1 = f2;
        f2 = tmp;
    }
    return f2;
}