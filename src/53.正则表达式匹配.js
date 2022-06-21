// 正则表达式匹配
//s, pattern都是字符串
function match(s, pattern)
{
    // write code here
     var patt=new RegExp('^'+pattern+'$');
  return   patt.test(s);
}
module.exports = {
    match : match
};