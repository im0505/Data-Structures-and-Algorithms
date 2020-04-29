class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val === currentNode.value) return;
        if (currentNode.value > val) {
          if (!currentNode.left) {
            currentNode.left = new Node(val);
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.value < val) {
          if (!currentNode.right) {
            currentNode.right = new Node(val);
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  contain(val) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (true) {
      if (val == currentNode.value) return currentNode;
      if (val < currentNode.value) {
        if (!currentNode.left) {
          return false;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.value) {
        if (!currentNode.right) {
          return false;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

module.exports = BinarySearchTree;
