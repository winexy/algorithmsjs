const Node = require('./Node');

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.current = null;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.current = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }


  [Symbol.iterator]() {
    return {
      next: () => {
        let done = !this.current;
        let value;

        if (!done) {
          value = this.current.val;
          this.current = this.current.next;
        } 
        return { done, value };
      }
    }
  }
}

module.exports = SingleLinkedList;