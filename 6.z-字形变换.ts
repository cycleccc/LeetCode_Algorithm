/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// 考点：模拟

// @lc code=start
function convert(s: string, numRows: number): string {
    if (s.length <= numRows || numRows === 1) {
        return s;
    }
    const arr = new Array(numRows).fill('');
    let num = 0;
    let plus = true;
    for (let i = 0; i < s.length; i++) {
        arr[num] += s[i];
        if (plus) {
            num += 1;
        } else {
            num -= 1;
        }

        if (num === 0) {
            plus = true;
        }
        if (num === numRows - 1) {
            // 再次到 底部 说明要向上了，为false
            plus = false;
        }
    }
    return arr.join('');
}
// @lc code=end
