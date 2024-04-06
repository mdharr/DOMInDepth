// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         if (!this.head) {
//             this.head = new ListNode(value);
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = new ListNode(value);
//         }
//     }

//     prepend(value) {
//         const newNode = new ListNode(value);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     delete(value) {
//         if (!this.head) return;
//         if (this.head.value === value) {
//             this.head = this.head.next;
//             return;
//         }

//         let current = this.head;
//         while (current.next && current.next.value !== value) {
//             current = current.next;
//         }

//         if (current.next) {
//             current.next = current.next.next;
//         }
//     }

//     find(value) {
//         let current = this.head;
//         while (current.next) {
//             if (current.value === value) return current;
//             current = current.next;
//         }
//         return null;
//     }

//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }

//     insertAtIndex(index, value) {
//         if (index === 0) {
//             this.prepend(value);
//             return;
//         }
    
//         const previous = this.getNodeAtIndex(index - 1);
//         if (previous == null) {
//             this.append(value);
//             return;
//         }
    
//         const newNode = new ListNode(value, previous.next);
//         previous.next = newNode;
//     }    

//     insertAfter(value, newValue) {
//         const existingNode = this.find(value);
//         if (existingNode) {
//             const newNode = new ListNode(newValue, existingNode.next);
//             existingNode.next = newNode;
//         }
//     }

//     deleteAtIndex(index) {
//         if (index === 0) {
//             this.head = this.head ? this.head.next : null;
//             return;
//         }
    
//         const previous = this.getNodeAtIndex(index - 1);
//         if (previous && previous.next) {
//             previous.next = previous.next.next;
//         }
//     }
    
//     getLastNode() {
//         let current = this.head;
//         while (current && current.next) {
//             current = current.next;
//         }
//         return current;
//     }
    
//     containsLoop() {
//         let slow = this.head;
//         let fast = this.head;
    
//         while (fast && fast.next) {
//             slow = slow.next;
//             fast = fast.next.next;
    
//             if (slow === fast) {
//                 return true;
//             }
//         }
//         return false;
//     }    

//     length() {
//         let count = 0;
//         let current = this.head;
//         while (current) {
//             count++;
//             current = current.next;
//         }
//         return count;
//     }
    
//     isEmpty() {
//         return this.head === null;
//     }

//     clear() {
//         this.head = null;
//     }

//     reverse() {
//         let current = this.head;
//         let prev = null;
//         while (current) {
//             const next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }

//     toArray() {
//         const array = [];
//         let current = this.head;
//         while (current) {
//             array.push(current.value);
//             current = current.next;
//         }
//         return array;
//     }

//     getNodeAtIndex(index) {
//         let current = this.head;
//         let currentIndex = 0;
    
//         while (current !== null && currentIndex < index) {
//             current = current.next;
//             currentIndex++;
//         }
    
//         return current;
//     }

//     getMiddleNode() {
//         let slow = this.head;
//         let fast = this.head;
    
//         while (fast && fast.next) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }
    
//         return slow;
//     }    
    
// }

// console.log(list.getMiddleNode());
// console.log(list.toArray());
// list.clear();
// list.print();


class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new ListNode(value);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new ListNode(value);
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// BEGINNER

/*

Beginner
Print Elements

Problem: Given the head of a linked list, print all its elements.
*/

// list.print();

/*

Insert at the End

Problem: Write a function to insert a new node at the end of a linked list.
*/

function insertAtEnd(head, value) {
    const newNode = new ListNode(value);

    if (!head) {
        return newNode;
    }

    let current = head;
    while (current.next) {
        current = current.next;
    }

    current.next = newNode;
    return head;
}

insertAtEnd(list.head, 6);
list.print();

/*
Find an Element

Problem: Implement a function to search for a given value in the linked list and return true if it exists, false otherwise.

*/



// EASY

/*

Easy
Insert at the Beginning

Problem: Write a function to insert a new node at the beginning of a linked list.
Delete a Node

Problem: Implement a function to delete a node with a given key from the linked list.
Find the Length

Problem: Write a function to count the number of nodes in a linked list.

*/


// INTERMEDIATE

/*

Intermediate
Reverse a Linked List

Problem: Write a function to reverse a linked list.
Detect a Cycle

Problem: Implement an algorithm to determine if a linked list has a cycle in it.
Merge Two Sorted Lists

Problem: Write a function that merges two sorted linked lists into a single sorted linked list.

*/

// ADVANCED

/*

Advanced
Reorder List
Problem: Given a singly linked list L: L0→L1→…→Ln-1→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
Approach: You may need to find the middle of the list, reverse the second half, and then merge the two halves.

*/