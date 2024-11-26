/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }
    let res = false;
    const dfs = (point, value) => {
        if (!point.left && !point.right && value === targetSum) {
            res = true;
        }
        if (point.left) dfs(point.left, value + point.left.val);
        if (point.right) dfs(point.right, value + point.right.val);
    };
    dfs(root, root.val);
    return res;
}
// @lc code=end
