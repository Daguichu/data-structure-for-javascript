function Mvvm(options = {}) {
  this.$option = options;

  let data = (this._data = this.$option.data);

  observe(data);
}

function Observe(data) {
  for (let k in data) {
    let v = data[k];
    observe(v);

    Object.defineProperty(data, k, {
      configurable: true,
      get() {
        return v;
      },
      set(newVal) {
        if (v === newVal) {
          return;
        }
        v = newVal;
        observe(newVal);
      }
    });
  }
}

function observe(data) {
  if (!data || typeof data !== "object") return;

  return new Observe(data);
}
