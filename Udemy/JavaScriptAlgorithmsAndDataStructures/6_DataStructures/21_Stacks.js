// ------
// Stacks
// ------

// What is a stack?
// A LIFO data structure (Last In First Out)

// Where stacks are used?
// Managing function invocations
// Undo / Redo
// Routing (the history object) is treated like a stack

// There are more than one way to implement a stack

// Using an ARRAY
// We can use the push and pop methods or unshift and shift methods to implement a stack
// const stack = [];
// stack.push("google");
// stack.push("instagram");
// stack.push("youtube");
// ['google', 'instagram', 'youtube']
// stack.pop(); // 'youtube'
// stack.pop(); // 'instagram'
// stack.pop(); // 'google'
// The push and pop methods are the most common and efficient

// Using a LINKED LIST
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
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

  // PUSH (adding a node to the top of the stack)
  // The function should accept a value
  // Create a new node with that value
  // If there are no nodes in the stack, set the first and last property to be the newly created node
  // If there is at least one node, create a variable that stores the current first property on the stack
  // Reset the first property to be the newly created node
  // Set the next property on the node to be the previously created variable
  // Increment the size of the stack by 1
  // Return the size of the stack
  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this.size;
  }

  // POP (removing a node from the top of the stack)
  // If there are no nodes in the stack, return null
  // Create a temporary variable to store the first property on the stack
  // If there is only 1 node, set the first and last property to be null
  // If there is more than one node, set the first property to be the next property on the current first
  // Decrement the size by 1
  // Return the value of the node removed
  pop() {
    if (!this.first) return null;

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp;
  }
}

const stack = new Stack();

console.log('>>> push');
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();

console.log('>>> pop');
stack.pop();
stack.print();
