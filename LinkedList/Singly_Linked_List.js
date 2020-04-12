class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
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
    return this;
  }
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return undefined;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let cnt = 0;
    let current = this.head;
    while (cnt !== index) {
      cnt++;
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index === 0) !!this.unShift(val);
    if (index === this.length) !!this.push(val);
    if (index < 0 || index > this.length) return false;
    else {
      var newNode = new Node(val);
      let pre = get(index - 1);
      newNode.next = pre.next;
      pre.next = newNode;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let pre = get(index - 1);
    let removedNode = pre.next;
    pre.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let pre = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = pre;
      pre = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
list.reverse();
list.print();
