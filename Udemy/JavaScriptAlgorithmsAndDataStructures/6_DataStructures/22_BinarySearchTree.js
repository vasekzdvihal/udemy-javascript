// -----
// Trees
// -----

// What is a Binary Search Tree?
// A data structure that consists of nodes in a parent / child relationship

// List are linear, but trees are not

// We can't have child-child relationships!
// There can only be one root node (the top node in a tree)

// ROOT - The top node in a tree
// CHILD - A node directly connected to another node when moving away from the Root
// PARENT - The converse notion of a child
// SIBLINGS - A group of nodes with the same parent
// LEAF - A node with no children
// EDGE - The connection between one node and another

// Trees
// Lots of different applications
// HTML DOM
// Network Routing
// Abstract Syntax Trees
// Artificial Intelligence
// Folders in Operating Systems
// Computer File Systems
// JSON

// Kinds of Trees
// Trees (general)
// Binary Trees (every node can have at most two children)
// Binary Search Trees (every node to the left of a parent node is always less than the parent, and every node to the right of a parent node is always greater than the parent)

// How BTS (Binary Search Trees) work?
// Every parent node has at most two children
// Every node to the left of a parent node is always less than the parent
// Every node to the right of a parent node is always greater than the parent

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

  // INSERTING A NODE
  // This function should accept a value
  // Create a new node with that value
  // Starting at the root
  //  Check if there is a root, if not - the root now becomes that new node!
  //  If there is a root, check if the value of the new node is greater than or less than the value of the root
  //  If it is greater
  //    Check to see if there is a node to the right
  //      If there is, move to that node and repeat these steps
  //      If there is not, add that node as the right property
  //  If it is less
  //    Check to see if there is a node to the left
  //      If there is, move to that node and repeat these steps
  //      If there is not, add that node as the left property
  // Return the Binary Search Tree
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

  // FINDING A NODE IN A BST
  // This function should accept a value
  // Starting at the root
  //  Check if there is a root, if not - we're done searching!
  //  If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  //  If not, check to see if the value is greater than or less than the value of the root
  //  If it is greater
  //    Check to see if there is a node to the right
  //      If there is, move to that node and repeat these steps
  //      If there is not, we're done searching!
  //  If it is less
  //    Check to see if there is a node to the left
  //      If there is, move to that node and repeat these steps
  //      If there is not, we're done searching!
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
}

const tree = new BinarySearchTree();

console.log('>>> insert');
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
console.log(tree);

console.log('>>> find');
console.log(tree.find(2));
console.log(tree.find(11));
console.log(tree.find(13));
console.log(tree.find(16));

