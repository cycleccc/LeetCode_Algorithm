/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// 考点：哈希表

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(target - nums[i])) {
            return [hashMap.get(target - nums[i]), i];
        }
        hashMap.set(nums[i], i);
    }
    return [];
}
// @lc code=end
