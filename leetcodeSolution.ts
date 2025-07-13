// Leetcode Question 100

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null){
        return true
    }

    if(!p || !q || p.val !== q.val){
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};


// Leetcode question 543
function diameterOfBinaryTree(root: TreeNode | null): number {
   
    let max = 0

    if(root === null){
        return 0
    }

    function getHeight(root){
        if(root ===  null){
            return 0
        }

        const leftH = getHeight(root.left)
        const rightH = getHeight(root.right)

        max = Math.max(max, leftH + rightH)

        return 1 + Math.max(leftH, rightH)
    }

    getHeight(root)

    return max
    
};
