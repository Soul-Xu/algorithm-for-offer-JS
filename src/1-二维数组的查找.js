/**
 * 1.二维数组的查找
 */
function Find(target, array)
{
    // write code here
     var row = array.length;  // 行数
    var col = array[0].length;  // 列数
    
    // 从右上角开始比较
    var r = 0;
    var c = col-1;
   
    while(r <=row-1 && c >= 0) { // 注意这里有等于号
        if (target > array[r][c]) {
            r++;
        }
        else if (target < array[r][c]) {
            c--;
        }
        else {
            return true;
        }
    }
    return false;
}