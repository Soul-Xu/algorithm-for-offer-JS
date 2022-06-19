// 二叉树的镜像
function Mirror(root)
{
    // write code here
    if(root==null) return null;
    //首先先将左右节点互换
    var  tmp = root.left;
    root.left=root.right;
    root.right=tmp;
    //递归
    Mirror(root.left);
    Mirror(root.right)
}
module.exports = {
    Mirror : Mirror
};