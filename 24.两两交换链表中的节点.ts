/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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
//   val: number
//   next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let one = head
  let two = head.next
  one.next = swapPairs(two.next)
  two.next = one
  return two
};

// let node1 = new ListNode(1)
// node1.next = new ListNode(2)
// node1.next.next = new ListNode(3)
// node1.next.next.next = new ListNode(4)

// console.log('swap:', swapPairs(node1))
// console.log('swap:', swapPairs(node1))


// @lc code=end

