class Node {
  constructor(value) {
    this.element = value;
    this.next = null;
  }
}

class StackBasedLinkedList {
  constructor() {
    this.top = null;
  }
  push(value) {
    const top = new Node(value);
    if (this.top === null) {
      this.top = top;
    } else {
      top.next = this.top;
      this.top = top;
    }
    return true;
  }
  pop() {
    if (this.top === null) return -1;
    const top = this.top;
    this.top = this.top.next;
    top.next = null;
    return top;
  }
  clear() {
    this.top = null;
  }
}

class SampleBrowser {
  constructor() {
    this.StackX = new StackBasedLinkedList();
    this.StackY = new StackBasedLinkedList();
  }
  to(value) {
    this.StackX.push(value);
    this.StackY.clear();
  }
  back() {
    const page = this.StackX.pop();
    this.StackY.push(page);
  }
  front() {
    const page = this.StackY.pop();
    this.StackX.push(page);
  }
}