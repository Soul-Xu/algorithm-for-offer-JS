// 二叉树的下一个结点
function GetNext(pNode)
{
    // write code here提示数组非法越界 是因为代码有中文状态下的
    if(pNode==null){
        return null;
    }
    //分两种情况：1  节点有孩子存在，则设置一个指针从该节点的右孩子出发，一直沿着指向左节点的指针 找到叶子结点即为下一个节点
     
    if(pNode.right!=null){
        var p=pNode.right;
        while(p.left!=null){
            p=p.left;
        }
        return p;
    }
    //2 该节点是父亲节点的左节点  没有右子树  则找第一个当前节点是父亲节点坐孩子的节点
    while(pNode.next!=null){
        if(pNode==pNode.next.left){//当前节点是父节点的第一个左节点并且该节点没有右子树
            return pNode.next;
        }
        pNode=pNode.next;
    }
}
module.exports = {
    GetNext : GetNext
};
