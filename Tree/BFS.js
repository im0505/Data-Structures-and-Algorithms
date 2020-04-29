const BST = require("./BST");

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(17);

function BFS(tree) {
  let visited = [],
    queue = [];

  let current = tree.root;
  if (!current) return false;
  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    visited.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return visited;
}
console.log(BFS(tree));
