// 二叉搜索树的第k个结点
function KthNode(pRoot, k)
{
    // write code here
    var arr=[];
    if(pRoot===null||k<1){
        return null;
    }
    function midInorder(root){
        if(root.left!==null){
             midInorder(root.left);
        }
        arr.push(root);
        if(root.right!==null){
            midInorder(root.right);
        }
    }
    midInorder(pRoot);
    return arr[k-1];
}