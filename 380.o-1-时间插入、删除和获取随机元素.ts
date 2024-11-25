/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
    list: number[];
    map: Object;
    constructor() {
        this.list = [];
        this.map = {};
    }

    insert(val: number): boolean {
        if (val in this.map) {
            return false;
        }
        this.list.push(val);
        this.map[val] = this.list.length - 1; // ->索引
        return true;
    }

    remove(val: number): boolean {
        if (val in this.map) {
            const index = this.map[val];
            let last = this.list[this.list.length - 1];
            this.list[index] = last;
            this.map[last] = index;
            delete this.map[val];
            this.list.pop();
            return true;
        }
        return false;
    }

    getRandom(): number {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
