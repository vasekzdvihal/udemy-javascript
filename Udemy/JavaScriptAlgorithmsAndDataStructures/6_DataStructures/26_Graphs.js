// ------
// Graphs
// ------

// What is a graph?
// A collection of nodes and connections between those nodes
// Can be represented by an adjacency matrix or an adjacency list

// Uses of graphs
// Social networks
// Location / Mapping
// Routing Algorithms
// Visual Hierarchy
// File System Optimizations
// EVERYWHERE!
// Recommendation engines ("People also watched...", "People who bought this also bought...")

// Graph terminology
// Vertex - A node
// Edge - Connection between nodes
// Weighted / Unweighted - Values assigned to distances between vertices
// Directed / Undirected - Directions assigned to distanced between vertices

// Adjacency Matrix

//  A--B--C
//  |     |
//  F--E--D

//  A B C D E
// A 0 1 0 0 1
// B 1 0 1 0 0
// C 0 1 0 1 0
// D 0 0 1 0 1
// E 1 0 0 1 0

// Adjacency List

//  0--1--2
//  |     |
//  5--4--3

// [
//  0 [1,5],
//  1 [0,2],
//  2 [1,3],
//  3 [2,4],
//  4 [3,5],
//  5 [4,0]
// ]

// If you have strings, you can use a hash table to store the adjacency list

// Adjacency Matrix vs. Adjacency List
// Matrix
// + Can take up less space (in sparse graphs)
// + Faster to iterate over all edges
// - Slower to lookup specific edge

// List
// - Can take up more space (in sparse graphs)
// - Can be slower to iterate over all edges
// + Faster to lookup specific edge

// Differences and Big O
// |V| - number of vertices
// |E| - number of edges

// -----------------------------------------------------
// | Operation     | Adjacency List | Adjacency Matrix |
// -----------------------------------------------------
// | Add Vertex    | O(1)           | O(|V^2|)         |
// | Add Edge      | O(1)           | O(1)             |
// | Remove Vertex | O(|V| + |E|)   | O(|V^2|)         |
// | Remove Edge   | O(|E|)         | O(1)             |
// | Query         | O(|V| + |E|)   | O(1)             |
// | Storage       | O(|V| + |E|)   | O(|V^2|)         |
// -----------------------------------------------------

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  // This function should accept a name of a vertex
  // It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add an edge between two vertices
  // This function should accept two vertices, we can call them vertex1 and vertex2
  // The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  // The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  // Don't worry about handling errors/invalid vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Remove an edge between two vertices
  // This function should accept two vertices, we'll call them vertex1 and vertex2
  // The function should reassign the key of vertex1 to be an array that does not contain vertex2
  // The function should reassign the key of vertex2 to be an array that does not contain vertex1
  // Don't worry about handling errors/invalid vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  // Remove a vertex
  // The function should accept a vertex to remove
  // The function should loop as long as there are any other vertices in the adjacency list for that vertex
  // Inside the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  // Delete the key in the adjacency list for that vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
console.log('Add vertex')
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
console.log(graph);

console.log('Add edge')
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Aspen");
console.log(graph);

console.log('Remove edge')
graph.removeEdge("Tokyo", "Aspen");
console.log(graph);

console.log('Remove vertex')
graph.removeVertex("Tokyo");
console.log(graph);
