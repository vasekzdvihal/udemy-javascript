// --------------
// Tree Traversal
// --------------

// There are 3 ways to traverse a tree:
// 1. Breadth-first search
// 2. Depth-first search - Pre-order
// 3. Depth-first search - Post-order

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if(val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return current;
  }

  // Breadth-first search
  // - Create a queue (this can be an array) and a variable to store the values of nodes visited
  // - Place the root node in the queue
  // - Loop as long as there is anything in the queue
  //   - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  //   - If there is a left property on the node dequeued - add it to the queue
  //   - If there is a right property on the node dequeued - add it to the queue
  // - Return the variable that stores the values
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      // "Hardcoded" for binary search tree. We can use a loop for a general tree.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());
console.log();
