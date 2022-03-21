/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


 var topKFrequent = function(nums, k) {
    if(nums.length == 0 || k == 0) {
        return []
    }
    if(nums.length == 1){
        return nums
    }
       
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        const curr = nums[i]
        if(hash[curr]){
            hash[curr] ++
        } else {
            hash[curr] = 1
        }
    }
    
    let numsArray = []
    for(let num in hash){
        numsArray.push([parseInt(num), hash[num]])
    }

    const sorted = numsArray.sort((a, b) => b[1] - a[1])

    let answer = []
    for(let i = 0 ; i < k; i++){
        answer.push(sorted[i][0])
        
    }
    
    return answer
    
    
};