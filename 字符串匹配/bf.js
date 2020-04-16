const bf = (n, m) => {
  const lenN = n.length;
  const lenM = m.length;
  if (lenN < lenM) return -1;
  for (let i = 0; i < lenN; i++) {
    let count = 0;
    for (let j = 0; j < lenM; j++) {
      if (n[i + j] !== m[j]) {
        break;
      }
      count++;
    }
    if (count === lenM) {
      return i;
    }
  }
  return -1;
};

//测试用例
const a = bf("abcs", "cs");
const b = bf("a", "aaaaa");
const c = bf("asddsdsds", "bnnnnn");
const d = bf("ssscddsaa", "cddsaa");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
