// 二叉树的深度
function TreeDepth(pRoot)
{
    // write code here
    if(pRoot == null){
        return 0;
    }
    var left = TreeDepth(pRoot.left)+1;
    var right = TreeDepth(pRoot.right)+1;
    return Math.max(left, right);
}