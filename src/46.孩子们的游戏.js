// 孩子们的游戏
function LastRemaining_Solution(n, m)
{
    // write code here
    if(n === 0) {
        return -1;
    }
    if(n === 1) {
        return 0;
    }
    return (LastRemaining_Solution(n-1, m)+m) % n;
}
module.exports = {
    LastRemaining_Solution : LastRemaining_Solution
};