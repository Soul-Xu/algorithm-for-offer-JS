// 栈的压入，弹出序列
function IsPopOrder(pushV, popV)
{
    // write code here
    var tmp=[];
    for(var i=0,j=0;i<pushV.length;i++){
        tmp.push(pushV[i]);
        while(tmp.length&&tmp[tmp.length-1]==popV[j]){
            tmp.pop();
            j++;
        }
    }
    return tmp.length==0;
}