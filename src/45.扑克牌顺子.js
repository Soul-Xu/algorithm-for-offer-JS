// 扑克牌顺子
function IsContinuous(numbers)
{
    // write code here
     if (numbers.length==0) return false;
 
    //先对数组进行排序
    numbers.sort(function(a, b) {
        return a - b;
    });
 
    var numberOfZero = 0, //0的个数
        numberOfGap = 0; //缺的个数
    var len = numbers.length;
    for (var i = 0; i < len && (numbers[i] === 0); ++i) {
        ++numberOfZero;
    }
 
    var small = numberOfZero,
        big = small + 1;
    while (big < len) {
        if (numbers[small] === numbers[big]) return false;
        numberOfGap += numbers[big] - numbers[small] - 1;
        small = big;
        ++big;
    }
    return numberOfGap <= numberOfZero ? true : false;
}
module.exports = {
    IsContinuous : IsContinuous
};