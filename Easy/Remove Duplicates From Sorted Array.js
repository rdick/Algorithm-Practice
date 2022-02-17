var removeDuplicates = function (nums) {
    let start = 0
    let cur = 1
    while(cur < nums.length) {
        if(nums[start] == nums[cur]){
            nums[cur] = "_"
        } else {
            start = start + 1
            nums[start] = nums[cur]
            if(start !== cur) {
                nums[cur] = null
            }
        }
        
        cur++
    }
    return start + 1
};
