// 链表中环的入口结点
function EntryNodeOfLoop(pHead)
{
    // write code here
    var cur =pHead,obj={},lt;
    while(cur!=null){
        lt=cur.val;
        if(!obj[lt]){
            obj[lt]=1;
            cur=cur.next;
        }else{
            return cur;
        }
    }
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};