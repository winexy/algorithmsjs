const Queue = require('../Queue');
const BinarySearchTree = require('./BinarySearchTree');


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


console.log(tree.dfs(true, BinarySearchTree.DFS_PRE_ORDER));
console.log(tree.dfs(true, BinarySearchTree.DFS_IN_ORDER));
console.log(tree.dfs(true, BinarySearchTree.DFS_POST_ORDER));

// bfs(tree);


