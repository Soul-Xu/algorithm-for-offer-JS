// 和为s的连续正整数序列
function FindContinuousSequence(sum)
{
    // write code here
     var low=1,high=2;
    array=[];
    while(high>low){
        var cur=(high+low)*(high-low+1)/2;
        if(cur<sum){
            high++;
        }
        if(cur===sum){
            var arr=[];
            for(var i=low;i<=high;i++){
                arr.push(i);
            }
            array.push(arr);
            low++;
        }
        if(cur>sum){
            low++;
        }
    }
    return array;
}
module.exports = {
    FindContinuousSequence : FindContinuousSequence
};