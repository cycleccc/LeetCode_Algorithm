/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    let maxLen = 1;
    const dfs = (point, len) => {
        if (!point.left && !point.right) {
            maxLen = Math.max(maxLen, len);
        }
        if (point.left) dfs(point.left, len + 1);
        if (point.right) dfs(point.right, len + 1);
    };
    dfs(root, maxLen);
    return maxLen;
}
// @lc code=end
