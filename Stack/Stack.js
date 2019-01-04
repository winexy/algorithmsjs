const Node = require('../Node');


class SingleLinkedListStack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.first) {
      this.first = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    return ++this.size;
  }


  peek() {
    return this.first.value;
  }


  pop() {
    if (!this.first) return null;

    let first = this.first;

    this.first = this.first.next;

    this.size--;

    return first.value;
  }

}


const ArrayStack = function() {
  const stack = [];

  return {
    get length() {
      return stack.length;
    },

    push(v) {
      stack.push(v);
      return stack.length;
    },

    peek() {
      return stack[this.length - 1]
    },

    pop() {
      return stack.pop();
    },

    print() {
      console.log(...stack);
    }
  }
};

module.exports = {
  ArrayStack,
  SingleLinkedListStack
};

