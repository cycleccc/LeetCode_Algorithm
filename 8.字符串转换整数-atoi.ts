/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    let num = parseInt(s, 10);
    const limit = Math.pow(2, 31);
    if (isNaN(num)) {
        num = 0;
    }

    if (num < -limit) {
        num = -limit;
    }
    if (num > limit - 1) {
        num = limit - 1;
    }

    return num;
}
// @lc code=end
