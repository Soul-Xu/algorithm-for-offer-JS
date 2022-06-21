// 数据流中的中位数
var arr=[];
function Insert(num)
{
   arr.push(num);
   arr.sort();
}
function GetMedian(){
   /*if(arr==null){
        return 0；
    }*/
    var len=arr.length;
    if(len==0){
        return 0;
    }
    if(len%2==1){
        return arr[Math.floor(len/2)];
    }
    if(len%2==0){
        //var a=Math.floor(len/2);
       // var b=Math.ceil(len/2);
        //return (arr[a]+arr[b])/2;
        return (arr[len/2]+arr[len/2-1])/2;
    }
     
}