// --------------
// Tree Traversal
// --------------

// There are 3 ways to traverse a tree:
// 1. Breadth-first search
// 2. Depth-first search - Pre-order
// 3. Depth-first search - Post-order

// Which one to use?
// It depends on what you are trying to do with the tree

// Breadth-first search
// --------------------
// Visit every node on the same level before going to the next level
// It's like a line at a theme park
// It's also called level-order traversal

// Depth-first search
// ------------------
// Visit every node on the same level before going to the next level
// It's like a line at a theme park
// It's also called level-order traversal

// Depth-first search - Pre-order
// ------------------------------
// Visit the root node first, then the left child, then the right child
// It's like a line at a theme park
// It's also called level-order traversal

// Depth-first search - Post-order
// -------------------------------
// Visit the root node first, then the left child, then the right child
// It's like a line at a theme park
// It's also called level-order traversal

// Recap
// Trees are non-linear data structures that contain a root and child nodes
// Binary Search Trees are a type of tree that have at most two children per node
// Binary Search Trees are a more specific type of binary tree where the left child is always less than the parent and the right child is always greater than the parent
// We can search through a BST and DFS


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

  // Depth-first search - Pre-order
  // - Create a variable to store the values of nodes visited
  // - Store the root of the BST in a variable called current
  // - Write a helper function which accepts a node
  //   - Push the value of the node to the variable that stores the values
  //   - If the node has a left property, call the helper function with the left property on the node
  //   - If the node has a right property, call the helper function with the right property on the node
  // - Invoke the helper function with the current variable
  // - Return the array of values
  DFSPreOrder() {
    const data = [];
    const current = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  // Depth-first search - Post-order`
  // - Create a variable to store the values of nodes visited
  // - Store the root of the BST in a variable called current
  // - Write a helper function which accepts a node
  //   - If the node has a left property, call the helper function with the left property on the node
  //   - If the node has a right property, call the helper function with the right property on the node
  //   - Push the value of the node to the variable that stores the values
  // - Invoke the helper function with the current variable
  // - Return the array of values
  DFSPostOrder() {
    const data = [];
    const current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(current);
    return data;
  }

  // Depth-first search - In-order
  // - Create a variable to store the values of nodes visited
  // - Store the root of the BST in a variable called current
  // - Write a helper function which accepts a node
  //   - If the node has a left property, call the helper function with the left property on the node
  //   - Push the value of the node to the variable that stores the values
  //   - If the node has a right property, call the helper function with the right property on the node
  // - Invoke the helper function with the current variable
  // - Return the array of values
  DFSInOrder() {
    const data = [];
    const current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
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

console.log(tree.BFS()); // [10, 6, 15, 3, 8, 20]
console.log(tree.DFSPreOrder()); // [10, 6, 3, 8, 15, 20]
console.log(tree.DFSPostOrder()); // [3, 8, 6, 20, 15, 10]
console.log(tree.DFSInOrder()); // [3, 6, 8, 10, 15, 20]
console.log();
