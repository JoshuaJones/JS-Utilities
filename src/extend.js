function extend(obj) {
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
}