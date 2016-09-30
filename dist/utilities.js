function each(nodelist, callback, scope) {
  for (let i = 0; i < nodelist.length; i++) {
    callback.call(scope, nodelist[i], i);
  }
}
;function extend(obj) {
    obj = obj || {};

    for (let i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

        for (let key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key))
            obj[key] = arguments[i][key];
        }
    }

    return obj;
};function getMaxHeight(nodelist) {
  let maxHeight = 0;

  for (let i = 0; i < nodelist.length; i++) {
    const el = nodelist[i];
    let height;

    el.style.height = '';
    height = el.offsetHeight;
    
    maxHeight = (height > maxHeight) ? height : maxHeight;
  }

  return maxHeight;
};function synchronousLoop(data, processData, done = () => {}) {
  if (data.length > 0) {
    let loop = function(data, i, processData, done) {
      processData(data[i], i, function() {
        if (++i < data.length) {
          loop(data, i, processData, done);
        } else {
          done();
        }
      });
    };
    loop(data, 0, processData, done);
  } else {
    done();
  }
}