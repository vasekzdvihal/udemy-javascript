// --------------------
// Dijkstra's Algorithm
// --------------------

// What is it?
// A weighted graph algorithm that finds the shortest path between two nodes

// Who was he?
// Edsger Wybe Dijkstra was a Dutch computer scientist and mathematical scientist
// He was a pioneer in the field of computer science and is considered the father of the discipline of algorithmics
// He was awarded the 1972 Turing Award for his work on shortest path finding algorithms

// Why is it useful?
// Used in GPS systems
// Used in networking routing protocols
// Used in many other fields
// Used in Google Maps

// The approach
// - Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
// - Once we've moved to the node we're going to visit, we look at each of its neighbors
// - For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
// - If the new total distance to a node is less than the previous total, we store the new shorter distance for that node

// A simple Priority Queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// Dijkstra's Pseudocode
// - This function should accept a starting and ending vertex
// - Create an object (we'll call it distances) and set each key to be every vertex in
//   the adjacency list with a value of infinity, except for the starting vertex which
//   should have a value of 0
// - After setting a value in the distances object, add each vertex with a priority of
//   Infinity to the priority queue, except the starting vertex, which should have a
//   priority of 0 because that's where we begin
// - Create another object called previous and set each key to be every vertex in the
//   adjacency list with a value of null
// - Start looping as long as there is anything in the priority queue
//   - Dequeue a vertex from the priority queue
//   - If that vertex is the same as the ending vertex - we are done!
//   - Otherwise loop through each value in the adjacency list at that vertex
//     - Calculate the distance to that vertex from the starting vertex
//     - If the distance is less than what is currently stored in our distances object
//       - Update the distances object with new lower distance
//       - Update the previous object to contain that vertex
//       - Enqueue the vertex with the total distance from the start node


