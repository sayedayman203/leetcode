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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null;
    }
    let headbk = head;
    
    while (head && head.val === val) {
        headbk = head = head.next;
    }
    
    while (head && head.next) {
        if (head.next.val === val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    return headbk;
};