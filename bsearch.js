function bsearch(arr, num) {
  let len = arr.length;
  let low = 0,
    high = len - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == num) {
      return mid;
    } else if (arr[mid] < num) {
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
  let mid = Math.floor((low + high) / 2);
  if (low > high) return -1;
  if (arr[mid] === num) return mid;
  if (arr[mid] < num) {
    return search(arr, mid + 1, high, num);
  } else {
    return search(arr, low, mid - 1, num);
  }
}

//查找第一个等于num的位置
function searchFirst(arr, num) {
  const len = arr.length;
  let low = 0,
    high = len - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (num > arr[mid]) {
      low = mid + 1;
    } else if (num < arr[mid]) {
      high = mid - 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== num) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

//查找最后一个等于num的位置
function searchEnd(arr, num) {
  const len = arr.length;
  let low = 0,
    high = len - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (num > arr[mid]) {
      low = mid + 1;
    } else if (num < arr[mid]) {
      high = mid - 1;
    } else {
      if (mid === len - 1 || arr[mid + 1] !== num) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

//查找第一个大于等于num的位置
function searchFirstBig(arr, num) {
  const len = arr.length;
  let low = 0,
    high = len - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= num) {
      if (mid == 0 || arr[mid - 1] < num) return mid;
      else high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

//查找最后一个小于等于num的位置
function searchLastSmall(arr, num) {
  const len = arr.length;
  let low = 0,
    high = len - 1;
  while (low <= high) {
    let mid = Math.floor(low + ((high - low) >> 1));
    if (arr[mid] > num) {
      high = mid - 1;
    } else {
      if (mid == len - 1 || arr[mid + 1] > num) return mid;
      else low = mid + 1;
    }
  }
}
const arr = [3, 5, 6, 6, 6, 8, 9, 10];
console.log(bsearch(arr, 6));
console.log(bsearch2(arr, 6));
console.log(searchFirst(arr, 6));
console.log(searchEnd(arr, 6));
console.log(searchFirstBig(arr, 7));
console.log(searchFirstBig(arr, 6));
console.log(searchLastSmall(arr, 8));
console.log(searchLastSmall(arr, 6));
