function quickSort(arr) {
  quickSortC(arr, 0, arr.length - 1);
}

function quickSortC(arr, p, r) {
  if (p >= r) return;

  const q = partition(arr, p, r);
  quickSortC(arr, p, q - 1);
  quickSortC(arr, q + 1, r);
}

function partition(arr, p, r) {
  let i = p;
  let pivot = arr[r];
  for (let j = p; j < r; j++) {
    if (arr[j] < pivot) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
    }
  }
  arr[r] = arr[i];
  arr[i] = pivot;
  return i;
}
