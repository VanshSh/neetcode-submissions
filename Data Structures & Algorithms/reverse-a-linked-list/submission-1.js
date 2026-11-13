/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        //           let prev = null;
        //   let curr = head;
        //   while (curr) {
        //     const next = curr.next; // 1. save the rest of the list
        //     curr.next = prev;       // 2. point this node backwards
        //     prev = curr;            // 3. move prev forward
        //     curr = next;            // 4. move curr forward
        //   }
        //   return prev;

        let prev = null
        let curr = head
        while(curr){
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }

}
