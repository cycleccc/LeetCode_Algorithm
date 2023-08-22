/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sumListNode = new ListNode('0');
    let headNode = sumListNode;
    let carryFlag = 0;
    while (carryFlag | l1 | l2) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let r1 = val1 + val2 + carryFlag;
        carryFlag = r1 >= 10 ? 1 : 0;
        sumListNode.next = new ListNode(r1 % 10);
        sumListNode = sumListNode.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return headNode.next;
};
// @lc code=end

