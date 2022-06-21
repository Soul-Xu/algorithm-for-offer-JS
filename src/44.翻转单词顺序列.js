// 翻转单词顺序列
function ReverseSentence(str)
{
    // write code here
    if(!str||!str.trim()) return str;
    var strArr = str.split(" "), //获取单词数组
        len = strArr.length;
 
    var start = 0,
        end = len - 1,
        temp;
    while (start < end) {
        temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        ++start;
        --end;
    }
    return strArr.join(" ").trim();
}
module.exports = {
    ReverseSentence : ReverseSentence
};