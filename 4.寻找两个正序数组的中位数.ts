/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// 考点：数组 api

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const newArr = [...nums1, ...nums2];
    newArr.sort((a, b) => a - b);
    const len = newArr.length;
    const mid = len / 2;
    return len % 2 === 0
        ? (newArr[mid - 1] + newArr[mid]) / 2
        : newArr[Math.floor(mid)];
}
// @lc code=end
