var rangeSumBST = function(root, low, high) {
    let sum = 0
        
    
    
    const inOrder = (root) => {
         if(root.val > low && root.left) inOrder(root.left)
         if(root.val >= low && root.val <= high) sum = sum + root.val
         if(root.val < high && root.right) inOrder(root.right)
    }
    
    inOrder(root)
    
    return sum
    };