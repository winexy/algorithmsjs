class Graph {
  constructor() {
    this._graph_ = {};
  }

  addVertex(value) {
    if (!this._graph_.hasOwnProperty(value)) 
      this._graph_[value] = [];
  }

  addEdge(vertexA, vertexB) {
    this._graph_[vertexA].push(vertexB);
    this._graph_[vertexB].push(vertexA);
  }

  removeEdge(vertexA, vertexB) {
    this._graph_[vertexA] = this._removeEdge_(vertexA, vertexB);
    this._graph_[vertexB] = this._removeEdge_(vertexB, vertexA);
  }

  _removeEdge_(vertex, toRemove) {
    return this._graph_[vertex].filter(value => value !== toRemove);
  }

  removeVertex(vertex) {
      while (this._graph_[vertex].length) {
          const adjacentVertex = this._graph_[vertex].pop();
          this.removeEdge(adjacentVertex, vertex);
      }
      delete this._graph_[vertex];
  }

  
}

module.exports = Graph;