var deleteMiddle = function(head) {
    let newHead = head
    const returnWhat = goToNextNode(newHead, 0, newHead)
    return returnWhat ? head : null
};

const goToNextNode = (midMinus1,count,curNode) => {
    if(curNode == null) {
        if(count == 1){
            return false
        }
        const mid = midMinus1.next
        const midPlusOne = mid.next
        midMinus1.next = midPlusOne
        return true
    }
    if(count % 2 == 1 && count != 1){
        midMinus1 = midMinus1.next
    }
    return goToNextNode(midMinus1,count+1,curNode.next)
    
}