// 二叉搜索树和双向链表
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree==null){
        return null;
    }
    var lastNode=null;
    lastNode=convertNode(pRootOfTree,lastNode);
    var head=lastNode;
    while(head && head.left){//循环到头部
        head=head.left;
    }
    return head;
}
function convertNode(root,lastNode){
    if(root==null) return;
    if(root.left){//左子树
        lastNode=convertNode(root.left,lastNode)
    }
    root.left=lastNode;
    if(lastNode){
        lastNode.right=root;
    }
    lastNode=root;
    if(root.right){//右子树
        lastNode=convertNode(root.right,lastNode)
    }
    return lastNode;
}