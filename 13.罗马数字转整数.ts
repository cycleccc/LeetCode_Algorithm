/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
    if (s.indexOf('M') === 0) {
        return 1000 + romanToInt(s.slice(1));
    }
    if (s.indexOf('CM') === 0) {
        return 900 + romanToInt(s.slice(2));
    }
    // 1000
    if (s.indexOf('D') === 0) {
        return 500 + romanToInt(s.slice(1));
    }
    if (s.indexOf('CD') === 0) {
        return 400 + romanToInt(s.slice(2));
    }
    if (s.indexOf('C') === 0) {
        return 100 + romanToInt(s.slice(1));
    }
    if (s.indexOf('XC') === 0) {
        return 90 + romanToInt(s.slice(2));
    }
    if (s.indexOf('L') === 0) {
        return 50 + romanToInt(s.slice(1));
    }
    if (s.indexOf('XL') === 0) {
        return 40 + romanToInt(s.slice(2));
    }
    if (s.indexOf('X') === 0) {
        return 10 + romanToInt(s.slice(1));
    }
    if (s.indexOf('IX') === 0) {
        return 9 + romanToInt(s.slice(2));
    }
    if (s.indexOf('V') === 0) {
        return 5 + romanToInt(s.slice(1));
    }
    if (s.indexOf('IV') === 0) {
        return 4 + romanToInt(s.slice(2));
    }
    if (s.indexOf('I') === 0) {
        return 1 + romanToInt(s.slice(1));
    }
    return 0;
}
// @lc code=end
