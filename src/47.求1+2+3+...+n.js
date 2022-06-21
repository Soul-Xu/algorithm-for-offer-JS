// 求1+2+3+...+n
function Sum_Solution(n)
{
    // write code here
     // write code here
    if(n==1){
        return 1;
    }else{
        return n+Sum_Solution(n-1);
    }
}