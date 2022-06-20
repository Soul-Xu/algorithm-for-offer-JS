// 丑数
function GetUglyNumber_Solution(index)
{
    // write code here
    var res = [],
        multiply2 = 0,
        multiply3 = 0,
        multiply5 = 0,
        nextIndex = 1
    res[0] = 1
    if(index <= 0)
        return 0
    while(nextIndex < index)
    {
        res[nextIndex] = min( res[multiply2] * 2, res[multiply3] * 3, res[multiply5] * 5 )
        while( res[multiply2] * 2 <= res[nextIndex] )
        {
            ++multiply2
        }
        while( res[multiply3] * 3 <= res[nextIndex] )
        {
            ++multiply3
        }
        while( res[multiply5] * 5 <= res[nextIndex] )
        {
            ++multiply5
        }
        ++nextIndex
    }
    return res[--nextIndex] 
}
 
function min(a,b,c)
{
    var min
    min = (a < b) ? a : b
    min = (min < c) ? min : c
    return min
}