// -----
// Queue
// -----

// What is a queue?
// A FIFO data structure (First In First Out)

// Where queues are used?
// Background tasks
// Uploading resources
// Printing / Task processing

// Big O of Queues
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)

// Recap
// Queues are a FIFO data structure where the first element added to the queue will be the first one removed
// We can use an array or a linked list to implement a queue, but we want to use a linked list because of the constant time insertion and removal


// There are more than one way to implement a queue
// Using ARRAY
// The push and shift methods or the unshift and pop methods
// const q = [];
// q.push('FIRST');
// q.push('SECOND');
// q.push('THIRD');
// ['FIRST', 'SECOND', 'THIRD']
// q.shift(); // 'FIRST'
// q.shift(); // 'SECOND'
// q.shift(); // 'THIRD'
// The shift and unshift methods are the most common and efficient

// You can use an array or a linked list, but we will use a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print() {
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // ENQUEUE (adding a node to the end of the Queue)
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there are no nodes in the queue, set this node to be the first and last property of the queue
  // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
  // Increment the size of the queue by 1
  // Return the size of the queue
  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  // DEQUEUE (removing a node from the beginning of the Queue)
  // If there is no first property, just return null
  // Store the first property in a variable
  // See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
  // If there is more than 1 node, set the first property to be the next property of first
  // Decrement the size by 1
  // Return the value of the node dequeued
  dequeue() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const queue = new Queue();

console.log('>>> enqueue');
queue.enqueue('FIRST');
queue.enqueue('SECOND');
queue.enqueue('THIRD');
queue.print();

console.log('>>> dequeue');
queue.dequeue();
queue.print();
