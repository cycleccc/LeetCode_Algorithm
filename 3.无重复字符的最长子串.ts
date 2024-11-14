/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// 考点：字符串 api

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let arr = [],
        max = 0;
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i]);
        if (index !== -1) {
            arr.splice(0, index + 1);
        }
        arr.push(s[i]);
        max = Math.max(arr.length, max);
    }
    return max;
}
// @lc code=end
