// 数字在排序数组中出现的次数
function GetNumberOfK(data, k)
{
    // write code here
    if (data == null) {
        return 0;
    }
 
    var leftIndex = leftIndexOfKeyInSortedArray(data, k);
    if (leftIndex == -1) {
        return 0;
    }
    var rightIndex = rightIndexOfKeyInSortedArray(data, k);
    return rightIndex - leftIndex + 1;
}
function leftIndexOfKeyInSortedArray(data, key) {
    if (data == null) {
        return -1;
    }
    var low = 0;
    var high = data.length - 1;
    var ret = -1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (data[mid] == key) {
            ret = mid;
            high = mid - 1;
        } else if (data[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ret;
}
 
function rightIndexOfKeyInSortedArray(data, key) {
        if (data == null) {
            return -1;
        }
        var low = 0;
        var high =data.length - 1;
        var ret = -1;
        while (low <= high) {
            var mid = Math.floor((low + high) / 2);
            if (data[mid] == key) {
                ret = mid;
                low = mid + 1;
            } else if (data[mid] > key) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ret;
}
module.exports = {
    GetNumberOfK : GetNumberOfK
};