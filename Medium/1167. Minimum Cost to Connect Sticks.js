/**
 * @param {number[]} sticks
 * @return {number}
 */
 var connectSticks = function(sticks) {
    if(sticks.length == 0) {
        return 0
    }
    
    let hash = {}
    
    sticks.sort((a,b) => a - b)
    let total = 0 
    while(sticks.length > 1){
        const oldSticks = sticks.splice(0,2)
        let s1 = oldSticks[0]
        let s2 = oldSticks[1]
        
        let cost = s1 + s2
        total += cost
        if(sticks.length == 1){
            sticks.push(cost)
        } else {
            sort(sticks,cost,0, sticks.length)
        }
    }
    return total
};

const sort = (sticks,cost, low, high) => {
    const cur = Math.floor((low + high)/2)
    if(sticks[cur] == cost){
        return sticks.splice(cur,0,cost) 
    } else if(low == cur){
        return sticks.splice(low+1,0,cost) 
    } else if (sticks[cur] > cost) {
        return sort(sticks,cost,low,cur)
    } else { // sticks[cur] < cost
        return sort(sticks,cost,cur,high)
    }
}