var removeElement = function(nums, val) {
    let start = 0
    let curr = 0
    while(curr < nums.length) {
        if(nums[curr] == val){
            
            nums[curr] = null
        } else{
            
            nums[start] = nums[curr]
            if(curr != start) {
                nums[curr] = null
            }
            start ++
        }
        curr++
    }
    return start
};