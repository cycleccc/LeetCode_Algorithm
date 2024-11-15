/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((numOne, numTwo) => numOne - numTwo);
    let sum = nums[0] + nums[1] + nums[2];
    let minDiff = Math.abs(sum - target);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const updatedSum = nums[i] + nums[left] + nums[right];
            const curDiff = Math.abs(updatedSum - target);

            if (Math.abs(updatedSum - target) < minDiff) {
                sum = updatedSum;
                minDiff = curDiff;
            } else if (updatedSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return sum;
}
// @lc code=end
