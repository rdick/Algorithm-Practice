var inorderTraversal = function(root) {
    let inOrder = []
    
    const bst = (root) => {
        if(root == null) {
            return
        }
        
        const left = bst(root.left)
        inOrder.push(root.val)
        const right = bst(root.right)
        
        return
    }
    bst(root)
    
    
    return inOrder
    
};