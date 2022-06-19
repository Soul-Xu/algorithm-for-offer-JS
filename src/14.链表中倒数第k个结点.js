// 链表中倒数第k个结点
function FindKthToTail(head, k)
{
    // write code here
    if(head==null||k<=0) return null;
    var prev = head;
    var tail = head;

    for(var index=0;index<k-1;index++){
        if(tail.next!=null){
            tail=tail.next;
        }else{
            return null;
        }        
    }    
    while(tail.next!=null){
        prev=prev.next;
        tail=tail.next;
    }
    return prev;
}
module.exports = {
    FindKthToTail : FindKthToTail
};