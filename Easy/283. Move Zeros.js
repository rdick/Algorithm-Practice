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