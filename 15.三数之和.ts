/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// 考点：双指针，排序

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return result;
        if (nums[i] === nums[i - 1]) continue;
        let leftPoint = i + 1;
        let rightPoint = nums.length - 1;
        while (leftPoint < rightPoint) {
            const sum = nums[i] + nums[leftPoint] + nums[rightPoint];
            if (sum === 0) {
                result.push([nums[i], nums[leftPoint], nums[rightPoint]]);
                while (
                    leftPoint < rightPoint &&
                    nums[leftPoint] === nums[leftPoint + 1]
                ) {
                    leftPoint++;
                }

                while (
                    leftPoint < rightPoint &&
                    nums[rightPoint] === nums[rightPoint - 1]
                ) {
                    rightPoint--;
                }

                leftPoint++;
                rightPoint--;
            } else if (sum < 0) {
                leftPoint++;
            } else {
                rightPoint--;
            }
        }
    }
    return result;
}
// @lc code=end
