// 把数组排成最小的数
function PrintMinNumber(numbers)
{
    // write code here
    if (!numbers.length)
        return "";
    min=Number.POSITIVE_INFINITY;
    return Sort(numbers, 0);
}
 
function Sort(numbers, index) {
    for (var i = index, l = numbers.length; i < l; ++i) {
        var temp = numbers[i];
        numbers[i] = numbers[index];
        numbers[index] = temp;
 
        if (index != numbers.length - 1)
            Sort(numbers, index + 1, min);
        else {
            var tempS = numbers.join("").toString();
            if (min > tempS) {
                min = tempS;
            }
        }
 
        temp = numbers[i];
        numbers[i] = numbers[index];
        numbers[index] = temp;
    }
    return min;
}
