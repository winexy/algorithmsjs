const Node = require('../Node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enquee(value) {
    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.length;
  }

  dequee() {
    if (!this.first) return null;

    let node = this.first;

    if (this.length === 1)
      this.last = null;

    this.first = this.first.next;

    this.length--;
    return node.value;
  }
}


let q = new Queue();

q.enquee(1);
q.enquee(2);
q.enquee(3);

console.log(q);
console.log(q.dequee());
console.log(q.dequee());
console.log(q.dequee());
console.log(q);
q.enquee(4);
q.enquee(5);
console.log(q);
