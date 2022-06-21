// 表示数值的字符串
//s字符串
function isNumeric(s)
{
    // write code here
    var reg = !isNaN(Number(s));
    return reg
}
module.exports = {
    isNumeric : isNumeric
};