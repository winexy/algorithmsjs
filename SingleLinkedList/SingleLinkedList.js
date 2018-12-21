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


  pop() {
    if (!this.head) return;

    let current = this.head;
    let prev = current
    
    while (current.next) {
      prev = current;
      current = current.next
    }
    
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    console.log('len', this.length);
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    
    return current.val;
  }


  toArray() {
    return [...this];
  }





  [Symbol.iterator]() {
    return {
      next: () => {
        let done = !this.current;
        let value;

        if (!done) {
          value = this.current.val;
          this.current = this.current.next;
        } else {
          this.current = this.head;
        }
        return { done, value };
      }
    }
  }
}

module.exports = SingleLinkedList;