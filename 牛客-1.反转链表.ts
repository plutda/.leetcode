class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// function reverseList(head: ListNode | null): ListNode | null {
//   if(!head) return null;
//   let flag: ListNode | null = head;
//   let list: Array<ListNode> = [];
//   let res: ListNode;
//   let resFlag: ListNode;
//   while(flag !== null) {
//     let temp = flag;
//     list.push(flag);
//     flag = flag.next;
//     temp.next = null;
//     // flag.next = null;
//   }
//   res = list.pop() as ListNode;
//   resFlag = res;
//   while(list.length) {
//     let item = list.pop() as ListNode;
//     resFlag.next = item;
//     resFlag = resFlag.next;
//   }
//   return res;
// }

// 双指针  看图更好理解
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

const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const result = reverseList(node1)
console.log('result: ', result)

export{}