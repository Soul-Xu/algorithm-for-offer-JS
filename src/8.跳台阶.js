// 跳台阶
function jumpFloor(number)
{
    // write code here
    if(number==1){
        return 1;
    }
    if(number==2){
        return 2;
    }
    var f1 = 1;
    var f2 = 2;
    for(var i=2;i<number;i++){
        var tmp = f1+ f2;
        f1 = f2;
        f2 = tmp;
    }
    return f2;
}