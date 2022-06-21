// 把字符串转化为整数
function StrToInt(str)
{
    // write code here
    if(/[a-zA-Z]/.test(str)){
        return 0;
    }
    var reg = /([\+|\-]?\d+)/;
    if(reg.test(str)){
        str = str.replace(reg, "$1");
        return str;
    }else{
        return 0;
    }
}
module.exports = {
    StrToInt : StrToInt
};