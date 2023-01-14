// -----
// Heaps
// -----

// What is a binary heap?
// Very similar to a binary search tree, but with some different rules
// In a MaxBinaryHeap, parent nodes are always larger than child nodes
// In a MinBinaryHeap, parent nodes are always smaller than child nodes

// Max binary heap
// Each parent has at most two child nodes
// The value of each parent node is always greater than its child nodes
// In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// Min binary heap
// Each parent has at most two child nodes
// The value of each parent node is always less than its child nodes
// In a min Binary Heap the parent is less than the children, but there are no guarantees between sibling nodes
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// Why do we need to know this?
// Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
// They are also used quite a bit, with graph traversal algorithms



// There is a easy way to store a binary heap in an array
// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is stored at 2n + 2

// For any child node at index n...
// Its parent is at index (n - 1) / 2

// Sink down?
// The procedure for deleting the root from the heap
// (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap)
// and restoring the properties is called down-heap (
// also known as bubble-down, percolate-down, sift-down, trickle down,
// heapify-down, cascade down, and extract-min/max).


class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Insert pseudocode
  // Push the value into the values property on the heap
  // Bubble Up:
  //   Create a variable called index which is the length of the values property - 1
  //   Create a variable called parentIndex which is the floor of (index - 1) / 2
  //   Keep looping as long as the values element at the parentIndex is less than the values element at the child index
  //     Swap the value of the values element at the parentIndex with the value of the element property at the child index
  //     Set the index to be the parentIndex, and start over!
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx]

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // Remove pseudocode
  // Swap the first value in the values property with the last one
  // Pop from the values property, so you can return the value at the end
  // Have the new root "sink down" to the correct spot...
  //   Your parent index starts at 0 (the root)
  //   Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  //   Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  //   If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  //   The child index you swapped to now becomes the new parent index
  //   Keep looping and swapping until neither child is larger than the element
  // Return the old root!
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.lenght > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log(heap);

heap.extractMax();
console.log(heap);

console.log('');
