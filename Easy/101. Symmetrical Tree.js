// var isSymmetric = function(root) {
//     if(!root) return true
        
    
//     const bst = (left, right) => {
//         if(left === null && right === null) {
//             return true
//         }
//         if(left === null || right === null) {
//             return false
//         }
        
//         if(left.val !== right.val){
//             return false
//         }
        
//         const inside = bst(left.left, right.right)
//         const outside = bst(right.left, left.right)
        
//         return inside && outside
//     }
    
//     return bst(root.left, root.right)
    
// };