function getSequence (arr) {
    const p = arr.slice() // 拷贝一个数组 p，p[i]记录的是result在arr[i]更新前记录的上一个值,保存当前项对应的前一项的索引
    const result = [0]
    let i, j, u, v, c
    const len = arr.length
    for (i = 0;i < len;i++) {
        const arrI = arr[i]
        // 遍历位置数组
        // 排除等于 0 的情况
        if (arrI !== 0) {
            j = result[result.length - 1]
            // (1) arrI 比 arr[j]大（当前值大于上次最长子系列的末尾值），直接添加
            if (arr[j] < arrI) {
                p[i] = j // 最后一项与 p 对应的索引进行对应, 保存上一次最长递增子系列的最后一个值的索引
                result.push(i) // result 存储的是长度为 i 的递增子序列最小末尾值的索引集合
                //（最小末尾值：要想得到最长递增子系列，需要子系列增长越慢越好，所以子系列末尾值需要最小）
                continue
            }

            // (2) arrI <= arr[j] 通过二分查找，找到后替换它；u和v相等时循环停止
            // 定义二分查找区间[u, v]
            u = 0
            v = result.length - 1
            // 开启二分查找
            while (u < v) {
                // 取整得到当前位置
                c = ((u + v) / 2) | 0
                if (arr[result[c]] < arrI) {
                    u = c + 1
                } else {
                    v = c
                }
            }

            // 比较 => 替换, 当前子系列从头找到第一个大于当前值arrI，并替换
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1]  // 与p[i] = j作用一致
                }
                result[u] = i // 有可能替换会导致结果不正确，需要一个新数组 p 记录正确的结果
            }
        }
    }

    // 前面的逻辑与 leetcode 300 求最长子系列长度相似
    // 下面主要的修正由于贪心算法可能造成的最长递增子系列在原系列中不是正确的顺序
    u = result.length
    v = result[u - 1]
    // 倒叙回溯 用 p 覆盖 result 进而找到最终正确的索引
    while (u-- > 0) {
        result[u] = v
        v = p[v]
    }
    return result
}

console.log(getSequence([10, 9, 2, 5, 3, 7, 101, 18]))