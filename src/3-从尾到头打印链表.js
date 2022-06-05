// 从尾到头打印链表
function printListFromTailToHead(head)
{
    // write code here
    var res = [];
    while(head!=null){
        res.push(head.val);
        head = head.next;
    }
    return res.reverse();
}