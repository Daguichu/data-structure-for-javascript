function isObj(obj) {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
}

function deepClone(obj) {
  if (!isObj) throw new Error("no Object");

  let isArray = Array.isArray(obj);
  let newObj = isArray ? [...obj] : { ...obj };

  let keys = Object.keys(newObj);
  keys.forEach(v => {
    newObj[v] = isObj(obj[v]) ? deepClone(obj[v]) : obj[v];
  });
  return newObj;
}
