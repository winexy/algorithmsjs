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
    
    return current;
  }


  shift() {
    if (!this.head) return;

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }


  unshift(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }


  reverseIterator() {
    let list = new SingleLinkedList();

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
    if (index < 0 || index >= this.length) 
      return null;

    if (index === 0) 
      return this.head;

    let counter = 1;
    let node = this.head.next;

    while (node) {
      if (counter === index) 
        return node;
      node = node.next;
      counter++;
    }
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
    const prev = this.get(index - 1);
    const next = this.get(index);
    
    node.next = next;
    prev.next = node;
    this.length++;

    return true;
  }


  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const deleted = this.get(index);

    prev.next = deleted.next;

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

SingleLinkedList.prototype.toString = function() {
  return "[object SingeLinkedList]";
};


module.exports = SingleLinkedList;