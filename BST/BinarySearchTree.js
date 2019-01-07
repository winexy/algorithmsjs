const Node = require('./Node');
const Queue = require('../Queue');

class BinarySearchTree {
  constructor(isUnique = false) {
    this.root = null;
    this.isUnique = isUnique;
  }

  insert(value, useRecursion = true) {
    const node = new Node(value);

    if (!this.root)
      this.root = node;
    else if (useRecursion)
      this.insertUsingRecursion(node);
    else
      this.insertUsingIteration(node);

    return this;
  }


  insertUsingRecursion(node, current = this.root) {
    if (this.isUnique && node.value === current.value) return;

    if (node.value < current.value) {
      if (current.left) this.insertUsingRecursion(node, current.left);
      else current.left = node;
    } else {
      if (current.right) this.insertUsingRecursion(node, current.right);
      else current.right = node;
    }
  }


  insertUsingIteration(node) {
    let current = this.root;
    while (true) {
      if (this.isUnique && node.value === current.value) return;

      if (node.value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          break;
        }
      }
    }
  }


  find(value) {
    return this.__find__(value);
  }

  __find__(value, current = this.root) {
    if (!current) return null;
    if (value === current.value) return value;

    if (value < current.value) return this.__find__(value, current.left);
    else return this.__find__(value, current.right);
  }

  contains(value) {
    return !!this.__find__(value);
  }


  bfs(useRecursion = true) {
    if (useRecursion)
      return BinarySearchTree.bfsUseRecursion(this);
    return BinarySearchTree.bfsUseIteration(this);
  }

  static bfsUseRecursion(tree) {
    const queue = new Queue();
    queue.enquee(tree.root);
    return [...recursion(queue)];

    function recursion(queue) {
      if (queue.isEmpty()) return [];

      const node = queue.dequee();
      if (node.left) queue.enquee(node.left);
      if (node.right) queue.enquee(node.right);

      return [node.value, ...recursion(queue)];
    }
  }


  static bfsUseIteration(tree) {
    const root = tree.root;

    const queue = new Queue();
    queue.enquee(root);

    const result = [];

    while (!queue.isEmpty()) {
      const node = queue.dequee();
      result.push(node.value);

      if (node.left) queue.enquee(node.left);
      if (node.right) queue.enquee(node.right);
    }

    return result;
  }


  dfs(useRecursion = true, order = BinarySearchTree.DFS_IN_ORDER) {
    if (useRecursion)
      return BinarySearchTree.dfsUseRecursion(this, order);
    return BinarySearchTree.dfsUseIteration(this, order);
  }

  static dfsUseRecursion(tree, order) {
    const current = tree.root;
    return recursion(current);

    function recursion(current) {
      if (current === null) return [];

      const left = recursion(current.left);
      const right = recursion(current.right);

      switch (order) {
        case BinarySearchTree.DFS_PRE_ORDER:
          return [current.value, ...left, ...right];
        case BinarySearchTree.DFS_IN_ORDER:
          return [...left, current.value, ...right];
        case BinarySearchTree.DFS_POST_ORDER:
          return [...left, ...right, current.value];
      }
    }

  }

  static dfsUseIteration(tree) {

  }

}


BinarySearchTree.DFS_PRE_ORDER = 1;
BinarySearchTree.DFS_IN_ORDER = 2;
BinarySearchTree.DFS_POST_ORDER = 3;


module.exports = BinarySearchTree;
