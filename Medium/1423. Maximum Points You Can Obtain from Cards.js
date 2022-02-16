/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    // bst
    let total = 0
    if(cardPoints.length == 0) {
        return 0
    }
    for(i=0; i < cardPoints.length; i++){
        total = total + cardPoints[i]
    }
    if(cardPoints.length <= k){
        return total
    }
    
    
    let right = 0
    let left = 0
    let sum = 0
    let max = 0
    let subArrayLength = cardPoints.length - k
    
    while(right < cardPoints.length){
        
        sum = sum + cardPoints[right]
        if(right-left +1 ==  subArrayLength) {
        console.log('right =',right, 'left =',left, 'sum=', total- sum, 'max', max)
           max = Math.max(max, total - sum)
           sum = sum - cardPoints[left] 
           left++ 
        }
        right++
    }
    return max
        
};
