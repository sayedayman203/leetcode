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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    
    let tracker = {};
    let res = head;
    tracker[head.val] = true;
    
    while (head && head.next) {
        if (tracker[head.next.val]) {
            head.next = head.next.next;
        } else {
            tracker[head.next.val] = true;
            head = head.next;
        }
    }
    
    return res;
};