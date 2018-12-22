const SingleLinkedList = require('./SingleLinkedList');

const list = new SingleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);


console.log(...list);

list.set(50, 10);

console.log(...list)


list.reverseIterator()
console.log(...list.reverse());