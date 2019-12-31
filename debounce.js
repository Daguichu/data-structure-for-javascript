function debounce(fn, wait, immediate) {
  let timeout = null;
  return function() {
    let context = this;
    let args = arguments;
    let result;

    clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) result = fn.apply(context, arguments);
    } else {
      setTimeout(function() {
        result = fn.apply(context, args);
      }, wait);
    }

    return result;
  };
}
