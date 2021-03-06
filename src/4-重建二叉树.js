// 重建二叉树
function reConstructBinaryTree(pre, vin)
{
    // write code here
   if (!pre || pre.length === 0) {
        return;
    }
    
    var treeNode = {
        val: pre[0]
    }
    for(var i = 0; i < pre.length; i++) {
        if (vin[i] === pre[0]) {
            treeNode.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i));
            treeNode.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
        }
    }
    return treeNode;
}