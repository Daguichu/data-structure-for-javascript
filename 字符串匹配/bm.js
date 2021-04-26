const size = 256;
const generateBC = function (str, bc) {
  for (let i = 0; i < size; i++) {
    bc[i] = -1;
  }
  for (let i = 0, len = str.length; i < len; i++) {
    let astii = str[i].charCodeAt();
    bc[astii] = i;
  }
};

const bm = function (strA, strB) {
  const bc = Array(size);
  generateBC(strB, bc);
  let i = 0;
  const lenA = strA.length;
  const lenB = strB.length;
  while (i <= lenA - lenB) {
    let j = lenB - 1;
    for (; j >= 0; j--) {
      if (strB[j] !== strA[i + j]) {
        break;
      }
    }
    if (j < 0) return i;
    const astii = strA[i + j].charCodeAt();
    i = i + (j - bc[astii]);
  }
  return -1;
};
