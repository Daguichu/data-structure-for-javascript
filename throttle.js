function throttle(fn) {
  let canRun = true;
  return () => {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, 500);
  };
}

//时间戳方式
function throttle2(fn, wait) {
  const start = new Date().getTime();

  return function () {
    const end = new Date().getTime();
  };
}
