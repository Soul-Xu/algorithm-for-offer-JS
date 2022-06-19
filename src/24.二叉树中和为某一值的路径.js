// 二叉树中和为某一值的路径
function FindPath(root, expectNumber)
{
    // write code here

    var result=[];
    if(root==null) return result;
    dfs(root,0,[]);
    function dfs(root,current,path){
        current+=root.val;
        path.push(root.val)
        if(current==expectNumber && root.left==null && root.right ==null){
            result.push(path.slice(0))
        }
        if(root.left!=null){
            dfs(root.left,current,path)
        }
        if(root.right!=null){
            dfs(root.right,current,path)
        }
        path.pop()
    }
    return result;
}