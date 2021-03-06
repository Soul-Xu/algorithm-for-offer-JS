// 从上往下打印二叉树
function PrintFromTopToBottom(root)
{
    // write code here
     if(root==null) return [];
    var result=[];    
    result.push(root.val);
    function travel(root){
        if(root.left==null && root.right==null) return;
        if(root.left!=null) result.push(root.left.val)
        if(root.right!=null) result.push(root.right.val)
        if(root.left!=null) travel(root.left);
        if(root.right!=null) travel(root.right);
    }
    travel(root);
    return result;
}