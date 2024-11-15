/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// 考点：双指针

// @lc code=start
function maxArea(height: number[]): number {
    let leftPoint = 0;
    let rightPoint = height.length - 1;
    let maxArea = 0;
    while (leftPoint < rightPoint) {
        let width = rightPoint - leftPoint;
        let h = Math.min(height[leftPoint], height[rightPoint]);
        let v = width * h;
        if (v > maxArea) {
            maxArea = v;
        }
    }
    return maxArea;
}
// @lc code=end
