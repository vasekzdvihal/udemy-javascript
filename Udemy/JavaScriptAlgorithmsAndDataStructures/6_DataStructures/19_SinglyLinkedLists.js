// -------------------
// Singly Linked Lists
// -------------------

// What is a linked list?
// A data structure that contains a head, tail, and length property
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null

// Comparing linked lists to arrays
// Lists
// Do not have indexes!
// Connected via nodes with a next pointer
// Random access is not allowed

// Arrays
// Indexed in order!
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

// -------------------

// Piece of data - val
// Reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  // Pushing pseudocode
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // Increment the length by one
  // Return the linked list
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.lenght++;
    return this;
  }

  // Pseudocode for pop
  // If there are no nodes in the list, return undefined
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to last node to be null
  // Set the tail to be the 2nd to last node
  // Decrement the length of the list by 1
  // Return the value of the node removed
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.lenght--;

    if (this.lenght === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you?');

const list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');
console.log(list);

list.pop();
console.log(list);

list.pop();
console.log(list);

list.pop();
console.log(list);

