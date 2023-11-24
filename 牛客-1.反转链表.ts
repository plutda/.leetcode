class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
if(!head) return null;
let flag: ListNode | null = head;
let list: Array<ListNode> = [head];
while(flag.next !== null) {
    list.push(flag);
    flag = flag.next;
    flag.next = null;
}
let newHead: ListNode = list.pop() as ListNode;
let newFlag: ListNode = newHead;
while(list.length) {
    let item = list.pop() as ListNode;
    newFlag.next = item;
    newFlag = newFlag.next;
}
return newHead;
}

const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

reverseList(node1)

console.log(111, reverseList(node1))