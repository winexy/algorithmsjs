const DoubleLinkedList = require('./DoubleLinkedList');

const list = new DoubleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
console.log(...list);

console.log(list.insert(5, 444));
console.log(list.remove(5));
console.log(...list);
