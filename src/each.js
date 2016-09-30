function each(nodelist, callback, scope) {
  for (let i = 0; i < nodelist.length; i++) {
    callback.call(scope, nodelist[i], i);
  }
}
