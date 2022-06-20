// 从1到n数字中1出现的次数
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
     if(n<0){
        return 0;
    }
    var count=0;
  for(var i = 1;i<=n;i++){
    var number = i;
    while(number>0){
        if(number%10==1){
            count++;
        }
        number = Math.floor(number/10);
       // console.log(number);
    }
  }
     
  return count;
    
}

