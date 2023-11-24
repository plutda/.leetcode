/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

// function reverseList(head: ListNode | null): ListNode | null {
//   let cur = head
//   let prev = null
//   while (cur) {
//     let next = cur.next
//     cur.next = prev
//     prev = cur
//     cur = next
//   }
//   return prev
// };

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }
  debugger
  let res = reverseList(head.next)
  head.next.next = head
  head.next = null
  return res
};
const a = new ListNode(1, null)
const b = new ListNode(2, a)
const c = new ListNode(3, b)

console.log('reverseList(c):', reverseList(c))// @lc code=end

