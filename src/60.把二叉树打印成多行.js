// 把二叉树打印成多行
function Print(pRoot)
{
    // write code here
    var res=[]
    if(!pRoot)return res
    var q=[]
    q.push(pRoot)
      
    while(q.length!=0){
        var l=0
        var h=q.length
        var arr=[]
        while(l++<h){
            var t=q.shift()
              
            arr.push(t.val)
            if(t.left)q.push(t.left)
            if(t.right)q.push(t.right)
        }
        res.push(arr)
    }
    return res
}
