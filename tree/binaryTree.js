//链式存储
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.rootNode = null;
  }

  insert(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
      return;
    }
    let p = this.rootNode;
    while (p !== null) {
      if (data > p.value) {
        if (p.right === null) {
          p.right = new Node(data);
          return;
        }
        p = p.right;
      } else if (data < p.value) {
        if (p.left === null) {
          p.left = new Node(data);
          return;
        }
        p = p.left;
      }
    }
  }

  find(data) {
    let p = this.rootNode;
    while (p !== null) {
      if (data > p.value) {
        p = p.right;
      } else if (data < p.value) {
        p = p.left;
      } else {
        return p;
      }
    }
    return null;
  }

  remove(data) {
    let p = this.rootNode;
    let pp = null;
    while (p !== null && p.value !== data) {
      pp = p;
      if (data > p.value) {
        p = p.right;
      } else {
        p = p.left;
      }
    }
    if (p === null) return;
    if (p.left !== null && p.right !== null) {
      let minP = p.right;
      let minPp = p;
      while (minP.left !== null) {
        minPp = minP;
        minP = minP.left;
      }
      p.value = minP.value;
      p = minP;
      pp = minPp;
    }

    let child = null;
    if (p.left) {
      child = p.left;
    } else if (p.right) {
      child = p.right;
    }

    if (pp === null) {
      this.rootNode = child;
    } else if (pp.left === p) {
      pp.left = child;
    } else {
      pp.right = child;
    }
  }

  findMaxNode() {
    let p = this.rootNode;
    while (p.right !== null) {
      p = p.right;
    }
    return p;
  }

  findMinNode() {
    let p = this.rootNode;
    while (p.left !== null) {
      p = p.left;
    }
    return p;
  }

  print() {
    let point = this.rootNode;
    if (point) {
      printAll(point.left);
      console.log(point.value);
      printAll(point.right);
    }
    function printAll(point) {
      if (point == null) {
        return;
      }
      printAll(point.left);
      console.log(point.value);
      printAll(point.right);
    }
  }
}

function baseTest() {
  let searchTree = new BinaryTree();
  console.log("step 1:");
  searchTree.insert(4);
  searchTree.insert(1);
  searchTree.insert(2);
  searchTree.insert(5);

  searchTree.print(); //1 2 4 5
  console.log("step 2:");
  console.log("5", searchTree.find(5)); //5
  console.log("null:", searchTree.find(6)); //null
}
baseTest();
//删除测试
function delTest() {
  let searchTree = new BinaryTree();
  console.log("add: 4 1 2 5 ");
  searchTree.insert(4);
  searchTree.insert(1);
  searchTree.insert(2);
  searchTree.insert(5);
  searchTree.print(); //1 2 4 5
  //console.log('del 3 null:', searchTree.remove(3));
  console.log("del 1 true:", searchTree.remove(1));
  console.log("print 2 4 5:");
  searchTree.print();
  console.log("del 4 root true:", searchTree.remove(4));
  console.log("print 2 5:");
  searchTree.print();
  // console.log('add: 3 7 1 5 5 5 ')
  searchTree.insert(3);
  searchTree.insert(7);
  searchTree.insert(1);
  // searchTree.insert(5);
  // searchTree.insert(5);
  // searchTree.insert(5);
  // console.log('print: 1 2 3 5 5 5 5 7 ')
  searchTree.print();
  console.log("del 5 true:", searchTree.remove(5));
  // console.log('print: 1 2 3 7 ')
  searchTree.print();
}

delTest();
