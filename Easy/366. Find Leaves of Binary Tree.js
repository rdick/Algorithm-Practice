var findLeaves = function(root) {
    if(root == null){
        return []
    }
    let arr = []
    
    const bst = (root) => {
        if(!root){
            return 0
        }
        
        const countL = bst(root.left)
        const countR = bst(root.right)
        console.log(countL, countR)
        const count = Math.max(countL, countR)
        
        if(arr[count] == null){
            arr[count] = [root.val]
        } else {
            arr[count].push(root.val)
        }
        return count + 1
    }

    bst(root, 0)
    return arr
};