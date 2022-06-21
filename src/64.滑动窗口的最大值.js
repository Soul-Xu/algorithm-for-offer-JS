// 滑动窗口的最大值
function maxInWindows(num, size)
{
    // write code here
    var q=[];
    var max=-1;
    var v=[];
    var i=0;
    if(size>num.length||size<=0) return v;
    while(size--){
        q.push(num[i]);
        if(num[i]>max) max=num[i];
        i++;
    }
    v.push(max);
    while(i<num.length){
        var m=q.shift();
        if(m==max){
            max=getMax(q);
        }
        q.push(num[i]);
        if(num[i]>max) max=num[i];
        v.push(max);
        i++;
    }
    return v;
}
function getMax(q){
    var max=-1;
    for(var i=0;i<q.length;i++){
        if(q[i]>max){
            max=q[i];
        }
    }
    return max;
}