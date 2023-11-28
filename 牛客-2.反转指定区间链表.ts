class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
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

    // 返回的是prev, 此时cur为null
    return prev;
}

export function reverseBetween(head: ListNode, m: number, n: number): ListNode {
    let virtualHead = new ListNode(-1, head);
    virtualHead.next = head;
    let flag = virtualHead;
    for (let i = 0; i < m - 1; i++) {
        flag = flag.next as ListNode;
    }

    let left = flag.next as ListNode;
    let right = flag;
    for (let i = 0; i < n - m + 1; i ++) {
        right = right.next as ListNode;
    }
    let cur = right.next;

    flag.next = null;
    right.next = null;
    reverseList(left);

    flag.next = right;
    left.next = cur;

    return virtualHead.next;
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const result = reverseBetween(node1, 2, 4)

console.log(result);