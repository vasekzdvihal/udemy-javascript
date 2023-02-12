// ---------------
// Graph Traversal
// ---------------

// Graph traversal uses
// 1. Peer to peer networking
// 2. Web crawlers
// 3. Finding "closest" matches/recommendations
// 4. Shortest path problems
//    - GPS Navigation
//    - Solving mazes
//    - AI (shortest path to win the game)
// 5. Graph Traversal is a general problem solving pattern

// Depth First Search (DFS)
// - Visit every node once
// - Visit the children of a node before visiting the siblings
// - Use a stack or recursion to keep track of nodes


class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // DFS Pseudocode (recursive)
  // - The function should accept a starting node
  // - Create a list to store the end result, to be returned at the very end
  // - Create an object to store visited vertices
  // - Create a helper function which accepts a vertex
  //   - The helper function should return early if the vertex is empty
  //   - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  //   - Loop over all of the values in the adjacencyList for that vertex
  //   - If any of those values have not been visited, recursively invoke the helper function with that vertex
  // - Invoke the helper function with the starting vertex
  // - Return the result array
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");

graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Aspen");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Dallas", "Los Angeles");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Hong Kong", "Tokyo");
console.log(graph);

console.log('depthFirstRecursive("Tokyo")');
console.log(graph.depthFirstRecursive("Tokyo"));
