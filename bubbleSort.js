function bubbleSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem;
        flag = true;
      }
    }
    if (!flag) break;
  }
}

const arr = [4, 5, 6, 3, 2, 1];
bubbleSort(arr);
