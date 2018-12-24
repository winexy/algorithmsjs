const Node = require('./Node');

class DoubleLinkedList {
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
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }


  pop() {
    if (!this.head) return;

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }


  shift() {
    if (!this.head) return;

    let currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return currentHead;
  }


  unshift(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }


  reverseIterator() {
    let list = new DoubleLinkedList();

    for (let value of this) 
      list.unshift(value);

    this.head = list.head;
    this.tail = list.tail;

    return this;
  }

  
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;  
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }


  get(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let count, current;
    if (index <= this.length / 2) {
      count = 1;
      current = this.head.next;
      
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 2;
      current = this.tail.prev
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }


  set(index, value) {
    let node = this.get(index);

    if (!node) return false;

    node.value = value;
    return true;
  }

  
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    
    const node = new Node(value);
    let before = this.get(index - 1);
    
    node.next = before.next;
    node.prev = before

    before.next.prev = node;
    before.next = node;
    before = node;
    
    this.length++;

    return true;
  }


  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const deleted = prev.next;
    prev.next = deleted.next;
    prev.next.prev = prev;

    deleted.next = deleted.prev = null;

    this.length--;

    return deleted;
  }




  [Symbol.iterator]() {
    this.current = this.head;
    return {
      next: () => {
        let done = !this.current;
        let value;

        if (!done) {
          value = this.current.value;
          this.current = this.current.next;
        } 

        return { done, value };
      }
    }
  }
}

DoubleLinkedList.prototype.toString = function() {
  return "[object DoubleLinkedList]";
};


module.exports = DoubleLinkedList;