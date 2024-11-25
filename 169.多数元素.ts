/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const map = new Map();
    const mid = nums.length / 2;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        const count = map.get(nums[i]) + 1 || 1;
        if (count > mid) ans = nums[i];
        else map.set(nums[i], count);
    }
    return ans;
}
// @lc code=end
