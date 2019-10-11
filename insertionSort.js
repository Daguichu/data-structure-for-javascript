function insertionSort(arr) {
  const len = arr.length;
  if (len <= 1) return;
  for (let i = 1; i < len; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j <= 0; j--) {
      if (a[j] > value) {
        a[j + 1] = a[j];
      } else {
        break;
      }
    }
    a[j + 1] = value;
  }
}

const arr = [4, 5, 6, 3, 2, 1];
insertionSort(arr);
