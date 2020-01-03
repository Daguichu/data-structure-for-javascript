//结点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//单向链表
class LinkedList {
  constructor() {
    this.head = new Node("head");
    this.endNode = this.head;
  }

  findByValue(value) {
    let currentNode = this.head.next;
    while (currentNode.next !== null) {
      if (currentNode.element === value) return currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) return -1;
  }

  findByIndex(index) {
    let currentNode = this.head.next;
    let count = 0;
    while (currentNode.next !== null && count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    if (count === index) return currentNode;
    if (currentNode.next === null) return -1;
  }

  append(node) {
    const element = new Node(node);
    this.endNode.next = element;
    this.endNode = element;
  }

  //指定下标插入
  insertFromIndex(newElement, index) {
    const currentNode = this.findByIndex(index - 1);
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  //指定下标插入
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log("未找到插入位置");
      return;
    }
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  findPrev(element) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }

  remove(element) {
    let currentNode = this.findPrev(element);
    if (currentNode === -1) {
      console.log("未找到该结点");
      return;
    }
    currentNode.next = currentNode.next.next;
  }

  //反转链表
  reverse() {
    let currentNode = this.head.next;
    if (!currentNode) return currentNode;
    let nextNode = currentNode.next;
    currentNode.next = null;
    while (nextNode !== null) {
      let tmpNode = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = tmpNode;
    }
    const head = new Node("head");
    head.next = currentNode;
    this.head = head;
  }

  display() {
    let currentNode = this.head.next; // 忽略头指针的值
    while (currentNode !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

//测试用例
const LList = new LinkedList();
LList.append("chen");
LList.append("curry");
LList.append("sang");
LList.append("zhao"); // chen -> curry -> sang -> zhao
LList.display();
LList.reverse();
console.log("-------------reverse item------------");
LList.display(); //zhao -> sang -> curry -> chen
// console.log("-------------insert item------------");
// LList.insert("qian", "chen"); // 首元素后插入
// LList.insert("zhou", "zhao"); // 尾元素后插入
// LList.display(); // chen -> qian -> curry -> sang -> zhao -> zhou
// console.log("-------------remove item------------");
// LList.remove("curry");
// LList.display(); // chen -> qian -> sang -> zhao -> zhou
// console.log("-------------find by item------------");
// LList.findByValue("chen");
// console.log("-------------find by index------------");
// LList.findByIndex(2);
// console.log("-------------与头结点同值元素测试------------");
// LList.insert("head", "sang");
// LList.display(); // chen -> qian -> sang -> head -> zhao -> zhou
// LList.findPrev("head"); // sang
// LList.remove("head");
// LList.display(); // chen -> qian -> sang -> zhao -> zhou
