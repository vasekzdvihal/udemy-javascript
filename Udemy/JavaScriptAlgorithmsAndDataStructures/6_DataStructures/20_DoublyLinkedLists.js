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

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // PUSH (add to the end)
  // Create a new node with the value passed to the function
  // If the head property is null set the head and tail to be the newly created node
  // If not, set the next property on the tail to be that node
  // Set the previous property on the newly created node to be the tail
  // Set the tail to be the newly created node
  // Increment the length
  // Return the Doubly Linked List
  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) { // We can also use if (!this.head), because if there is no head, there is no tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // POP (remove from the end)
  // If there is no head, return undefined
  // Store the current tail in a variable to return later
  // If the length is 1, set the head and tail to be null
  // Update the tail to be the previous Node
  // Set the newTail's next to null
  // Decrement the length
  // Return the value removed
  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkedList();

console.log('>>> push')
list.push('Hello');
list.push('Bonjour');
list.push('Howdy');
list.push('Hola');
list.push('Ciao');
list.print();

console.log('>>> pop')
list.pop();
list.print();
