function selectionSort(arr) {
  let select,
    len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    select = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[select] > arr[j]) {
        select = j;
      }
    }
    if (select !== i) {
      let tmp = arr[i];
      arr[i] = arr[select];
      arr[select] = tmp;
    }
  }
}

const arr = [4, 5, 6, 3, 2, 1];
selectionSort(arr);
