/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    let y = parseInt(x.toString().split('').reverse().join(''));
    if (x < 0) y = -y;
    return y > 2147483647 || y < -2147483648 ? 0 : y;
}
// @lc code=end
