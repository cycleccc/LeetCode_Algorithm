/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */
// @lc code=start
function lengthOfLIS(nums) {
    var dfs = function (i, last) {
        console.log('i----', i, 'nums[i]----', nums[i], 'last---', last);
        if (i === nums.length)
            return 0;
        var len = dfs(i + 1, last);
        if (nums[i] > last)
            len = Math.max(len, dfs(i + 1, nums[i]) + 1);
        return len;
    };
    return dfs(0, -Infinity);
}
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// @lc code=end
