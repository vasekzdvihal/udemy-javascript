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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  print = () => { console.log(this.adjacencyList); };

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
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // We are done
        // Build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}




// Testing
const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log('Dijkstra\'s Algorithm');
graph.print();

console.log(graph.Dijkstra('A', 'E'));
console.log(graph.Dijkstra('A', 'F'));
console.log(graph.Dijkstra('A', 'D'));

console.log();
