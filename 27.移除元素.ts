/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let i = 0;
    for (let e of nums) if (e !== val) nums[i++] = e;
    return i;
}
// @lc code=end
