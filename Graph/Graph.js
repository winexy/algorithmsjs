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


  dfs(vertex) {
    const dfs = vertex => {
      visited[vertex] = true;
      result.push(vertex);
      graph[vertex].forEach(neighbour => {
        if (!visited[neighbour]) 
          return dfs(neighbour);
      });
    };

    const result = [];
    const visited = {};
    const graph = this._graph_;

    dfs(vertex);

    return result;
  }

  dfsIter(vertex) {
    const stack = [];
    const visited = {
      [vertex]: true
    };
    const result = [];
    stack.push(vertex);

    let current;

    while (stack.length) {
      current = stack.pop();
      result.push(current);
      this._graph_[current].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      })
    }

    return result;
  }

  bfs(vertex) {
    const result = [];
    const queue = [vertex];
    const visited = { [vertex]: true };
    let current;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this._graph_[current].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    
    return result;
  }
  
}

module.exports = Graph;