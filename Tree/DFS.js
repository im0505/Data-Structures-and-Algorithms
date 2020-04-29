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

const arr = [];
function DFS(node) {
  let visit = [];
  console.log(node.value);
  arr.push(node.value);
  if (!node.left && !node.right) return;
  if (node.left) visit.push(DFS(node.left));
  if (node.right) visit.push(DFS(node.right));

  return visit;
}
DFS(tree.root);
console.log(arr);
