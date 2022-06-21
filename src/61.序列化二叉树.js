// 序列化二叉树
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var arr = [];
function Serialize(pRoot)
{
    // write code here
    if(pRoot==null){
        arr.push('a');
    }else{
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
       
}

function Deserialize(s)
{
    // write code here
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number == 'number'){
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr); 
    }
    return node;
}