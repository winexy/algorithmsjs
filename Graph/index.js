const Graph = require('./Graph');

const graph = new Graph();

graph.addVertex('TSE');
graph.addVertex('ALA');
graph.addVertex('MAD');

graph.addEdge('TSE', 'ALA');
graph.addEdge('ALA', 'MAD');

console.log(graph);

graph.removeVertex('ALA');
console.log(graph);

