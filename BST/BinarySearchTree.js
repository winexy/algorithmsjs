const Node = require('./Node');

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
    if (!this.root) return null;
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


}
