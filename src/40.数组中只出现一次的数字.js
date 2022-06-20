// 数组中只出现一次的数字
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var len = array.length,
        num1,
        num2,
        resXOR = 0,
        indexOf1
     
    if( len < 2 )
        return
    for(var i=0; i<len; i++)
    {
        resXOR ^= array[i]
    }
     
    indexOf1 = find1( resXOR )
     
    for(var j=0; j<len; j++)
    {
        if(IsBit1( array[j], indexOf1 ))
        {
            num1 ^= array[j]
        } else {
            num2 ^= array[j]
        }
    }
     
    return [ num1, num2 ]
}

function find1(bit)
{
    var index = 0
     
    while((bit & 1) == 0)
    {
        bit = bit >> 1
        index++
    }
     
    return index
}
 
function IsBit1(bit, index)
{
    var num = bit >> index
     
    return (num & 1)
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};
