/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function reverseList(head: ListNode | null) {
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  while(cur) {
    // 先把next保存下来,不然后面取不到
    const next = cur.next
    // 修改链表走向
    cur.next = prev
    prev = cur
    cur = next
  }
  // 头尾节点都返回
  return [head, prev];
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let virtualHead = new ListNode(-1, head)
  let flag = virtualHead
  let left, right, cur
  while(flag) {
    left = flag.next
    let p = left
    for (let i = 0; i < k; i++) {
      right = p.next
      p = p.next
    }
    cur = flag.next
    flag = left
    right.next = null
    reverseList(left)
  }
};

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const result = reverseKGroup(node1, 2)

console.log(result);
// @lc code=end

