// 按之字型打印二叉树
function Print(pRoot)
{
    var result=[];
    // write code here
    if(pRoot==null){
        return result;
    }
    var queue=[];
    var nextLevel=0;
    queue.push(pRoot);
    var toBePrinted=1;
    var level=0;
    var arr=[];
    while(queue.length){
        var temp=queue.shift();
        toBePrinted--;
        arr.push(temp.val);
        if(temp.left){
               queue.push(temp.left);
            nextLevel++;
        }
        if(temp.right){
            queue.push(temp.right);
            nextLevel++;
        }
        if(toBePrinted==0){
            toBePrinted=nextLevel;
            nextLevel=0;
            level++;
            if(level%2==0){
                arr.reverse();
            }
            result.push(arr);
            arr = [];
        }
         
    }
    return result;
  
     
         
}