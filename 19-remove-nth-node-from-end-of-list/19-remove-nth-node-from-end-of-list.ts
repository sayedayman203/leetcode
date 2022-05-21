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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let res = head;
    
    let target_parent: ListNode | null = null;
    let target: ListNode | null = head;
    
    for (let i = 1; i < n && head.next; i++) {
        head = head.next;
    }
    
    if (!head.next) {
        return target.next;
    }
    
    while (head.next) {
        target_parent = target;
        target = target.next;
        head = head.next;
    }
    target_parent.next = target?.next || null;
    return res;
};