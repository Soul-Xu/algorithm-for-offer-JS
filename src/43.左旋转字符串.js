// 左旋转字符串
function LeftRotateString(str, n)
{
    // write code here
    if(!str||n<0) return "";
     
    var strArr = str.split(""),
        len = strArr.length;
     
    if(n>len) return "";
     
    var front = strArr.slice(0, n).reverse(),
        behind = strArr.slice(n, len).reverse(),
        newArr = front.concat(behind);
        return newArr.reverse().join("");
     
}
module.exports = {
    LeftRotateString : LeftRotateString
};