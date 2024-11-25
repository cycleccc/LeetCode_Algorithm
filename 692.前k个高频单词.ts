/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

// 考点：哈希表 + 优先队列

// @lc code=start
function topKFrequent(words: string[], k: number): string[] {
    const wordCount = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    const sortedWords = Object.keys(wordCount).sort((a, b) => {
        if (wordCount[a] === wordCount[b]) {
            return a.localeCompare(b);
        }
        return wordCount[b] - wordCount[a];
    });
    return sortedWords.slice(0, k);
}
// @lc code=end
