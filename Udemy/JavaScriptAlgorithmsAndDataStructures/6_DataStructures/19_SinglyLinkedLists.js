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

  // Pushing pseudocode (adding a node to the end of the Linked List)
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

  // Pseudocode for pop (removing a node from the end of the Linked List)
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

  // SHIFT (removing a node from the beginning of the Linked List)
  // If there are no nodes, return undefined
  // Store the current head property in a variable
  // Set the head property to be the current head's next property
  // Decrement the length by 1
  // Return the value of the node removed
  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.lenght--;

    if (this.lenght === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // UNSHIFT (adding a node to the beginning of the Linked List)
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the newly created node's next property to be the current head property on the list
  // Set the head property on the list to be that newly created node
  // Increment the length of the list by 1
  // Return the linked list
  unshift(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.lenght++;
    return this;
  }

  // GET (retrieving a node by its position in the Linked List)
  // This function should accept an index
  // If the index is less than zero or greater than or equal to the length of the list, return null
  // Loop through the list until you reach the index and return the node at that specific index
  get(index) {
    if (index < 0 || index >= this.lenght) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // SET (changing the value of a node based on its position in the Linked List)
  // This function should accept a value and an index
  // Use your get function to find the specific node
  // If the node is not found, return false
  // If the node is found, set the value of that node to be the value passed to the function and return true
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // INSERT (adding a node to the Linked List at a specific position)
  // If the index is less than zero or greater than the length, return false
  // If the index is the same as the length, push a new node to the end of the list
  // If the index is 0, unshift a new node to the start of the list
  // Otherwise, using the get method, access the node at the index - 1
  // Set the next property on that node to be the new node
  // Set the next property on the new node to be the previous next
  // Increment the length
  // Return true
  insert(index, val) {
    if (index < 0 || index > this.lenght) return false;
    if (index === this.lenght) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.lenght++;
    return true;
  }

  // REMOVE (removing a node from the Linked List at a specific position)
  // If the index is less than zero or greater than the length, return undefined
  // If the index is the same as the length - 1, pop
  // If the index is 0, shift
  // Otherwise, using the get method, access the node at the index - 1
  // Set the next property on that node to be the next of the next node
  // Decrement the length
  // Return the value of the node removed
  remove(index) {
    if (index < 0 || index >= this.lenght) return undefined;
    if (index === 0) return this.shift();
    if (index === this.lenght - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.lenght--;
    return removed;
  }

  // REVERSE (reversing the Linked List in place)
  // Swap the head and tail
  // Create a variable called next
  // Create a variable called prev
  // Create a variable called node and initialize it to the head property
  // Loop through the list
  // Set next to be the next property on whatever node is
  // Set the next property on the node to be whatever prev is
  // Set prev to be the value of the node variable
  // Set the node variable to be the value of the next variable
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.lenght; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
    return this;
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
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you?');

const list = new SinglyLinkedList();

console.log('>>> push');
list.push('Hello');
list.push('Goodbye');
list.push('Howdy');
list.push('Hola');
list.push('Ciao');
list.print();

// console.log(>>> pop');
// list.pop();
// list.pop();
// list.pop();
// list.print();

// console.log('>>> shift');
// list.shift();
// list.shift();
// list.shift();
// list.print();

// console.log('>>> unshift');
// list.unshift('Hey');
// list.unshift('Hi');
// list.print();

// console.log('>>> get');
// console.log(list.get(-1));
// console.log(list.get(100));
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.get(3));
// list.print();

// console.log('>>> set');
// console.log(list.set(-1, 'test'));
// console.log(list.set(100, 'test'));
// console.log(list.set(0, 'test'));
// console.log(list.set(2, 'test'));
// console.log(list.set(3, 'test'));
// list.print();

console.log('>>> insert');
console.log(list.insert(-1, 'test'));
console.log(list.insert(100, 'test'));
console.log(list.insert(0, 'Bonjour'));
console.log(list.insert(2, 'Au revoir'));
console.log(list.insert(3, 'Salut'));
list.print();

// console.log('>>> remove');
// console.log(list.remove(-1));
// console.log(list.remove(100));
// console.log(list.remove(0));
// console.log(list.remove(2));
// console.log(list.remove(3));
// list.print();

console.log('>>> reverse');
list.reverse();
list.print();
