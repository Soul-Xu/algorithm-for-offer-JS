// 反转链表
function ReverseList(pHead)
{
    // write code here
    if(pHead==null||pHead.next==null) return pHead;
    var prev=null;
    var next=null;
    while(pHead!=null){
        next=pHead.next;
        pHead.next=prev;
        prev=pHead;
        pHead=next;
    }
    return prev;
}
module.exports = {
    ReverseList : ReverseList
};
