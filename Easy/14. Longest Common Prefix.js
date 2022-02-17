/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length == 0) return ""
        return binarySearch(strs, 0, strs.length-1)
    
};

const binarySearch = (strs, l, r) => {
    if(l == r) {
        return strs[l]
    } else {
        const mid = Math.floor((r + l) / 2)
        const left = binarySearch(strs, l, mid)
        const right = binarySearch(strs, mid + 1, r)
        return commonPrefix(left,right)
    }
}

const commonPrefix = (left, right) => {
    let min = Math.min(left.length, right.length)
    for(let i = 0; i < min; i++) {
        if(left[i] != right[i]){
            return left.slice(0,i)
        }
    }
    return left.slice(0,min)
}