const SingleLinkedList = require('./SingleLinkedList');

const list = new SingleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);


console.log(list.toArray());

list.set(50, 10);

console.log(list.toArray());


console.log(list.insert(3, 10));
console.log(list.toArray());
console.log(list.insert(-1, 1050));
console.log(list.toArray());

console.log(list.toString());