function bsearch(arr, num) {
  let len = arr.length;
  let low = 0,
    high = len - 1;
  while (low <= high) {
    let mid = (low + high) / 2;
    if (a[mid] == num) {
      return mid;
    } else if (a[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function bsearch2(arr, num) {
  let len = arr.length;
  return search(arr, 0, len - 1, num);
}

function search(arr, low, high, num) {
  let mid = (low + high) / 2;
  if (low > high) return -1;
  if (arr[mid] === num) return mid;
  if (arr[mid] < num) {
    return search(arr, mid + 1, high, num);
  } else {
    return search(arr, low, mid - 1, num);
  }
}
