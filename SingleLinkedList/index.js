const SingleLinkedList = require('./SingleLinkedList');

const list = new SingleLinkedList();

list.push(1);
list.push(2);
list.push(3);


console.log(...list);
// for (let val of list.iterator()) {
  // console.log('a ' + val);
// }
