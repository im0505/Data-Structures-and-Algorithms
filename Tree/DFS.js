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

function DFS(tree) {
  let data = [];
  function traverse(node) {
    data.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return data;
}

console.log(DFS(tree));
