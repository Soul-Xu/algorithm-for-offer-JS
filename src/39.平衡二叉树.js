// 平衡二叉树
var isBalanced = true;
 
function isBalancedCore(pRoot) {
  if (!pRoot) {
    return 0;
  }
  var leftCount = 0;
  var rightCount = 0;
  if (pRoot.left) {
    leftCount = isBalancedCore(pRoot.left);
  }
  if (pRoot.right) {
    rightCount = isBalancedCore(pRoot.right);
  }
  if (Math.abs(leftCount - rightCount) > 1) {
    isBalanced = false;
  }
  return leftCount > rightCount ? leftCount + 1 : rightCount + 1;
}
 
function IsBalanced_Solution(pRoot)
{
    // write code here
    if (!pRoot) {
      return true;
    }
    isBalancedCore(pRoot);
    var ret = isBalanced;
    isBalanced = true;
    return ret;
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};