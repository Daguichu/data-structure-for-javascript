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
mergeSort(arr);
