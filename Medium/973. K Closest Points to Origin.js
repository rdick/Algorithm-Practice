// 70 - 90 % percentile
var kClosest = function(points, k) {
    points.sort((a,b) => (a[0]*a[0]+a[1]*a[1])-(b[0]*b[0]+b[1]*b[1]))
    return points.splice(0,k)
}

// 20 % percentile
var kClosest = function(points, k) {
    if(k == 0 || points.length == 0){
        return []
    }
    
    if(points.length == k){
        return points
    }
    
    let hash = {}
    
    for(let i = 0; i < points.length; i++){
        const x = points[i][0]
        const y = points[i][1]
        
        const distance = x*x + y*y
        if(hash[distance]){
            hash[distance].push(points[i])
        } else {
            hash[distance] = [points[i]] 
        }
       
    }
    console.log(hash)
    let distancesArray = []
    for(let d in hash){
        distancesArray.push(parseInt(d))
    }
    
    distancesArray.sort((a,b) => a - b)
    
    let answerPoints = []
    let i = 0
    let counter = k
    while(counter > 0) {
        const distance = distancesArray[i]
        const groupOfPoints = hash[distance.toString()]
        
        for(let j = 0; j < groupOfPoints.length; j++){
            let point = groupOfPoints[j]
            answerPoints.push(point)
            counter --
            if(counter == 0){
                break
            }
        i ++  
        }
        
    }
    return answerPoints
};