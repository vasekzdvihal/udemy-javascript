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

