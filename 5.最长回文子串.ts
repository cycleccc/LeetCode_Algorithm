/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// 考点: 中心扩展法
// 动态规划，搞不来

// @lc code=start
function longestPalindrome(s: string): string {
    let maxLength = 0;
    let start = 0;

    // 辅助函数：从中心向两边扩展
    function expandAroundCenter(left: number, right: number): void {
        // 当左右指针在有效范围内且字符相等时继续扩展
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // 如果当前回文串长度大于之前找到的最大长度
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    // 遍历每个可能的中心点
    for (let i = 0; i < s.length; i++) {
        // 奇数长度的回文串，以单个字符为中心
        expandAroundCenter(i, i);
        // 偶数长度的回文串，以两个字符之间的空隙为中心
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
}
// @lc code=end
