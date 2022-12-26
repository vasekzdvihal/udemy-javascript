// -------------------
// Doubly Linked Lists
// -------------------

// Doubly Linked Lists are almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!
// It also has an extra pointer, to the previous node!
// It allows us to traverse the list in both directions!
// It takes more memory than Singly Linked Lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
