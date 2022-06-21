// 删除链表中重复的结点
function deleteDuplication(pHead)
{
    // write code here
    if(pHead === null) return null;
    if(pHead !== null && pHead.next === null) return pHead;
      
    var first = {
        val: -1,
        next: pHead
    }
        cur = pHead,
        prev = first;
      
    first.next = pHead;
    while(cur !== null && cur.next !== null){
        if(cur.val === cur.next.val){
            var val = cur.val;
            while(cur !== null && cur.val === val){
                cur = cur.next;
                prev.next = cur;
            };
        } else {
            prev = cur;
            cur = cur.next;
        };
    };
    return first.next;
}
module.exports = {
    deleteDuplication : deleteDuplication
};