var findOriginalArray = function(changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    
    changed.sort((a,b) => a - b)
    
    res = []
    map = new Map()
    
    for(i in changed) {
        const num = changed[i]
        const divBy2 = num / 2
        if(map.has(divBy2)){
            if(map.get(divBy2) == 1){
                map.delete(divBy2)
            } else {
                map.set(divBy2, map.get(divBy2)-1)
            }
            res.push(divBy2)
        } else {
            if(map.get(num)){
                map.set(num, map.get(num)+1)
            } else {
                map.set(num, 1)
            }
        }
    }
    console.log(res)
    return map.size == 0 ? res : []
}
