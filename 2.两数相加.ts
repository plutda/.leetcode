/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

// 双指针 头节点
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode(0)
  let flag1 = l1
  let flag2 = l2
  let cur = head
  let carry = 0
  while (flag1 !== null || flag2 !== null) {
    let x = (flag1 !== null) ? flag1.val : 0
    let y = (flag2 !== null) ? flag2.val : 0
    let sum = x + y + carry
    let num = sum % 10
    carry = Math.floor(sum / 10)
    cur.next = new ListNode(num)
    cur = cur.next
    flag1 = flag1 !== null ? flag1.next : null
    flag2 = flag2 !== null ? flag2.next : null
  }
  if (carry > 0) {
    cur.next = new ListNode(carry)
  }
  return head.next
};

// let node1 = new ListNode(9);
// let node2 = new ListNode(9);

// node1.next = new ListNode(9);
// node1.next.next = new ListNode(9);
// node1.next.next.next = new ListNode(9);
// node2.next = new ListNode(9);

// console.log(addTwoNumbers(node1, node2))
// @lc code=end

