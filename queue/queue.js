class ArrayQueue {
  constructor(n) {
    const queue = Array(n);
    const head = 0;
    const tail = 0;

    this.enqueue = (item) => {
      if (tail === n) {
        if (head === 0) {
          return false;
        } else {
          for (let i = head; i < tail; i++) {
            queue[i - head] = queue[i];
          }
          tail = tail - head;
          head = 0;
        }
      }
      queue[tail] = item;
      tail++;
      return true;
    };

    this.dequeue = () => {
      if (head === tail) return false;
      const item = queue[head];
      head++;
      return item;
    };
  }
}

//循环队列
class CircularQueue {
  constructor(n) {
    const queue = Array(n);
    const head = 0;
    const tail = 0;

    this.enqueue = (item) => {
      if ((tail + 1) % n === head) return false;
      queue[tail % n] = item;
      tail = (tail + 1) % n;
      return true;
    };

    this.dequeue = () => {
      if (head === tail) return false;
      const item = queue[head];
      head = (head + 1) % n;
      return item;
    };
  }
}

//链表表示
class Node {
  constructor(value) {
    this.element = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue = (item) => {
    const node = new Node(item);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    return true;
  };

  dequeue = () => {
    if (this.head === null) return false;
    const node = this.head;
    this.head = this.head.next;
    node = null;
  };
}
