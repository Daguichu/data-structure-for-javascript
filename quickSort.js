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
  for (j = p; j < r; j++) {
    if (arr[j] < pivot) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  let temp = arr[i];
  arr[i] = arr[r];
  arr[r] = temp;
  return i;
}
const arr = [8, 10, 2, 3, 6, 1, 5];
const arr1 = [1];
const arr2 = [];
const arr3 = [1, 1, 1, 1, 1];
const arr4 = [0, 2, 5, 4, 2, 4, 2, 2, 5, 7, 9, 4, 3, 67, 8, 3];
// quickSort(arr);
// quickSort(arr1);
// quickSort(arr2);
// quickSort(arr3);
// quickSort(arr4);
// console.log(arr, arr1, arr2, arr3, arr4);

//用快排思想找出第k大的数
function findK(arr, k) {
  const len = arr.length;
  if (len < k || len === 0 || k < 0) return;
  let q = partition(arr, 0, len - 1);
  let p = 0,
    r = len - 1,
    tmp;
  while (q + 1 !== k) {
    if (k > q) {
      tmp = partition(arr, q + 1, r);
      p = q + 1;
      q = tmp;
    } else {
      tmp = partition(arr, p, q - 1);
      r = q - 1;
      q = tmp;
    }
  }
  console.log(arr[q]);
  return arr[q];
}
findK(arr, 3);
findK(arr1, 1);
findK(arr4, 5);
findK(arr3, 3);
quickSort(arr);
quickSort(arr1);
quickSort(arr2);
quickSort(arr3);
quickSort(arr4);
console.log(arr, arr1, arr2, arr3, arr4);
