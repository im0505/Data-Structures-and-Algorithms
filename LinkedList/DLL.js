class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    this.length--;
    var temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return temp;
    }
    this.tail.prev.next = null;
    this.tail = temp.prev;
    temp.prev = null;
    return temp;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return oldHead;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.prev = null;
    oldHead.next = null;
    return oldHead;
  }
  unshift(val) {
    if (this.length === 0) return this.push(val);
    var newNode = new Node(val);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let half = Math.floor(this.length / 2);
    let current;
    if (index <= half) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else if (index > half) {
      current = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        current = current.prev;
      }
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
    //edge cases:
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let node = this.get(index - 1);
    newNode.next = node.next;
    node.next.prev = newNode;
    node.next = newNode;
    newNode.prev = node;
    this.length++;
    return true;
  }
  remove(index) {
    if (index >= this.length || index < 0) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let removed = this.get(index);
    let pre = removed.prev;
    let aft = removed.next;
    (pre.next = aft), (aft.prev = pre);
    (removed.next = null), (removed.prev = null);
    this.length--;
    return removed;
  }
}

let list = new DoublyLinkedList();

list.push(0);
list.push(2);

list.insert(1, 1);
console.log(list);
