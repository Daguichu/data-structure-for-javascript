const mergeArr = (left, right) => {
  let tmp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      tmp.push(left[leftIndex++]);
    } else {
      tmp.push(right[rightIndex++]);
    }
  }
  return tmp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeArr(mergeSort(left), mergeSort(right));
};

const arr = [4, 5, 6, 3, 2, 1];
const result = mergeSort(arr);

const mergeSort1 = arr => {
  const len = arr.length;
  mergeSort_c(arr, 0, len - 1);
};

function mergeSort_c(arr, p, r) {
  if (p >= r) return;

  const q = Math.floor((p + r) / 2);
  mergeSort_c(arr, p, q);
  mergeSort_c(arr, q + 1, r);
  merge(p, q, r, arr);
}

function merge(p, q, r, arr) {
  let i = p,
    j = q + 1,
    k = 0;
  const tmpArr = [];
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      tmpArr[k++] = arr[i++];
    } else {
      tmpArr[k++] = arr[j++];
    }
  }
  let start = i,
    end = q;
  if (j <= r) {
    start = j;
    end = r;
  }
  while (start <= end) {
    tmpArr[k++] = arr[start++];
  }

  for (i = 0; i <= r - p; i++) {
    arr[p + i] = tmpArr[i];
  }
}

const arr1 = [4, 5, 6, 3, 2, 1];
const arr2 = [11, 8, 3, 9, 7, 1, 2, 5];
mergeSort1(arr1);
mergeSort1(arr2);
console.log(result, arr1, arr2);
