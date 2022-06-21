// 字符流中第一个不重复的字符
//Init module if you need
function Init()
{
    // write code here
    global.result = [];
    return global.result
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(result[ch]){
        result[ch]++
    } else {
        result[ch] = 1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(var i in result){
        if(result[i] === 1){
            return i;
        };
    };
    return '#';
}
module.exports = {
    Init : Init,
    Insert : Insert,
    FirstAppearingOnce: FirstAppearingOnce
};