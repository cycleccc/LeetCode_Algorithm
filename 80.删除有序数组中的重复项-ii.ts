/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let j = 0;
    const countMap = new Map();

    for (const num of nums) {
        const count = countMap.get(num) || 0;
        if (count < 2) {
            countMap.set(num, count + 1);
            nums[j++] = num;
        }
    }

    nums.splice(j);
    return j;
}
// @lc code=end
