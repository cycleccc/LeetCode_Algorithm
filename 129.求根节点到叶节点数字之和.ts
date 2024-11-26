/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0;
    let sum = 0;
    const dfs = (point, value) => {
        const temp = value * 10 + point.val;
        if (!point.left && !point.right) sum += temp;
        if (point.right) dfs(point.right, temp);
        if (point.left) dfs(point.left, temp);
    };
    dfs(root, sum);
    return sum;
}
// @lc code=end
