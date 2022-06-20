// 第一个只出现一次的字符
function FirstNotRepeatingChar(str)
{
    // write code here
    if(!str){
        return -1;
    }
    var flag = {};
    var len = str.length;
    for(var i = 0;i<len;i++){
        if(flag[str[i]]){
            if(flag[str[i]]>2){
                continue;
            }else{
                flag[str[i]]++;
            }
        }else{
            flag[str[i]] = 1;
        }
    }
    for(var i = 0;i<len;i++){
        if(flag[str[i]] == 1){
            return i;
        }
    }
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};