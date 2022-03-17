/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    if(intervals.length == 0){
        return 0
    }
    intervals.sort((a,b) => {return a[0] -b[0]})
    console.log(intervals)
    let rooms = [intervals[0][1]]
    
    for(let i=1; i < intervals.length; i++){
        let currIntervalStart = intervals[i][0]
        let currIntervalEnd = intervals[i][1]
        for(let j=0; j < rooms.length; j++){
            if(rooms[j] <= currIntervalStart){
                rooms[j] = currIntervalEnd
                break
            } else if (j == rooms.length - 1) {
                rooms.push(currIntervalEnd)
                break
            }
        }        
    }
    return rooms.length
    
};