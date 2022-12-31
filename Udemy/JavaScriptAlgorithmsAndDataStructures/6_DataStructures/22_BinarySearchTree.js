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
}

const tree = new BinarySearchTree();
