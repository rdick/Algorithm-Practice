var moveZeroes = function(nums) {
    if(nums.length == 0 || nums.length == 1){
        return nums
    }
    start= 0
    find = 0
    while(find < nums.length && start < nums.length) {
        if(nums[find] == 0 ) {
            find++
        } else {
            if(find != start) {
                const found = nums[find]
                nums[start] = found
                nums[find] = 0
            }
            start ++
            find = start
        }
        
    }
};

var moveZeroes = function(nums) {
    
    let start = 0
    let count = 0
    
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] != 0){
            nums[start] = nums[i]
            start ++
        } else {
            count ++
        }
    }
    for(let i = nums.length-count; i < nums.length; i++ ){
    // console.log(i, count, count<i)
        
        nums[i] = 0
    }
    return nums
};

// const bst = (isBadVersion, L, R) => {
//     const mid = Math.floor((L+R)/2)
    
    
//     const badVersion = isBadVersion(mid)
//     console.log(mid)
//     if(badVersion && !isBadVersion(mid-1)){
//         return mid
//     }
//     if(badVersion) return bst(isBadVersion, L, mid)  
//     if(!badVersion && isBadVersion(mid+1)) return mid+1
//     if(!badVersion) return bst(isBadVersion, mid, R)
// }
