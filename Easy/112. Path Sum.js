var hasPathSum = function(root, targetSum) {
    if(!root){
        return false
    }
    
    const bst = (root,curSum, targetSum) => { 
        if(!root) {
            return false
        }
        
        curSum += root.val

        if(root.left === null && root.right === null) {
            return curSum == targetSum
        }
        
        return bst(root.left, curSum, targetSum) || bst(root.right, curSum, targetSum)
    }
    return bst(root, 0,targetSum)

};