class Heap {
  constructor() {
    this.heap = [""];
  }

  insert(p) {
    let len = this.heap.length;
    this.heap[len] = p;
    if (len === 1) return;
    while (parseInt(len / 2) > 0 && this.heap[parseInt(len / 2)] < p) {
      this.heap[len] = this.heap[parseInt(len / 2)];
      this.heap[parseInt(len / 2)] = p;
      len = parseInt(len / 2);
    }
  }

  delete() {
    let len = this.heap.length;
    if (len === 1) return;
    const end = this.heap.pop();
    this.heap[1] = end;
    this.heapify(len - 1, 1);
  }

  heapify(n, i) {
    while (true) {
      let maxPos = i;
      if (i * 2 <= n && this.heap[i] < this.heap[i * 2]) maxPos = i * 2;
      if (i * 2 + 1 <= n && this.heap[maxPos] < this.heap[i * 2 + 1])
        maxPos = i * 2 + 1;
      if (maxPos === i) break;
      let tmp = this.heap[i];
      this.heap[i] = this.heap[maxPos];
      this.heap[maxPos] = tmp;
      i = maxPos;
    }
  }
}

const MyHeap = new Heap();

MyHeap.insert(33);
MyHeap.insert(17);
MyHeap.insert(40);
MyHeap.insert(22);
MyHeap.insert(30);
MyHeap.insert(19);
MyHeap.insert(25);
MyHeap.insert(20);

MyHeap.delete();

const arr = ["", 7, 5, 19, 8, 4, 1, 20, 13, 16];

const buildHeap = function (arr) {
  let len = arr.length;
  for (let i = parseInt(len / 2); i >= 1; --i) {
    heapify(arr, len, i);
  }
};

const heapify = function (arr, n, i) {
  while (true) {
    let maxPos = i;
    if (i * 2 <= n && arr[i * 2] > arr[i]) maxPos = i * 2;
    if (i * 2 + 1 <= n && arr[maxPos] < arr[i * 2 + 1]) maxPos = i * 2 + 1;
    if (maxPos === i) break;
    let tmp = arr[i];
    arr[i] = arr[maxPos];
    arr[maxPos] = tmp;
    i = maxPos;
  }
};

const heapSort = function (arr) {
  buildHeap(arr);
  let k = arr.length - 1;
  while (k > 1) {
    let tmp = arr[1];
    arr[1] = arr[k];
    arr[k] = tmp;
    --k;
    heapify(arr, k, 1);
  }
};

heapSort(arr);

console.log(MyHeap.heap);
console.log(arr);
