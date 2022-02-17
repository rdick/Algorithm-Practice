var mySqrt = function(x) {
    if(x == 0){
        return 0
    }
    
    return bst(x,0, 8)
};

var bst = (target,left, right) => {
    let mid = (left+right)/2
    let pow = mid*mid
    let powPlus1 = (mid+1)*(mid+1)
    if(pow == target) return mid
    if(pow < target && powPlus1 > target) return mid
    if(pow > target) return bst(target,left, right/2)
    if(pow < target) return bst(target,left+right/2, right)
    
}