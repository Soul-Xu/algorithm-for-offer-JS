// 合并两个排序的链表
function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    var head=new ListNode(0);
    var pHead=head;
    while(pHead1!=null && pHead2!=null){
        if(pHead1.val>=pHead2.val){
            head.next=pHead2;
            pHead2=pHead2.next;
        }else{
            head.next=pHead1;
            pHead1=pHead1.next;
        }
        head=head.next;
    }
    if(pHead1!=null){
        head.next=pHead1;
    }
    if(pHead2!=null){
        head.next=pHead2;
    }
    return pHead.next;
}
module.exports = {
    Merge : Merge
};