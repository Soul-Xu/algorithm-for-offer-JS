// 对称的二叉树
function isSymmetrical(pRoot)
{
    // write code here
    //对称二叉树  首先根节点以及其左右子树，左子树的左子树和右子树的右子树
    //左子树的右子树和右子树的左子树相同即可  采用递归法
     
    if(pRoot==null){
        return true;
    }
    return comRoot(pRoot.left,pRoot.right);
     
}
 
function comRoot(left,right){
    if(left==null&&right==null){
        return true;
    }
    if(left!=null&&right!=null){
        if(left.val==right.val){
            return comRoot(left.left,right.right)&&comRoot(left.right,right.left);
        }
    }
}
module.exports = {
    isSymmetrical : isSymmetrical
};
