const PriorityQueue = require('./PriorityQueue');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList.hasOwnProperty(value)) 
      this.adjacencyList[value] = [];
  }

  addEdge(vertexA, vertexB, weight) {
    this.adjacencyList[vertexA].push({
      node: vertexB, weight
    });
    this.adjacencyList[vertexB].push({
      node: vertexA, weight
    });
  }

  dijkstra(start, finish) {
    const { 
      distances,
      previous,
      nodes
    } = initValues(
      start,
      this.adjacencyList
    );

    const path = [];

      
    let smallest;
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        // we're done
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          // find neighbouring node
          let nextNode = this.adjacencyList[smallest][neighbour];

          // calcaulate new distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            // updating new smallest distance to neighbour
            distances[nextNeighbour] = candidate;
            // updating previous - How we got to next neighbour
            previous[nextNeighbour] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }

        }
      } 
      
    }

    return [start, ...path.reverse()].join(' -> ');
      
  }
  
}

  function initValues(startPoint, list) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    for (let vertex in list) {
      let value = vertex === startPoint ? 0 : Infinity;
      distances[vertex] = value;
      nodes.enqueue(vertex, value);
      previous[vertex] = null;
    }

    return {
      nodes, distances, previous
    }
  }

  function buildPath(vertexes) {
    
  }

module.exports = WeightedGraph;
