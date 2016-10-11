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
};function getElIndex(el, childSelector) {
  const children = el.parentNode.querySelectorAll(childSelector);
  for (let i = 0; i < children.length; i++) {
    if (children[i] == el) {
      return i;
    }
  }
  return -1;
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
};function isTouch() {
  return !!(navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i));
};const loadJSONP = (function(){
  let timer;
  let unique = 0;

  return function(url) {
    let promise = new Promise((resolve, reject) => {
      timer = setTimeout(function() {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
          script = null;
        }
        delete window[name];
        if (timer) {
          clearTimeout(timer);
        }
        reject(new Error('Timeout'));
      }, 10000);

      // INIT
      var name = "_jsonp_" + unique++;
      if (url.match(/\?/)) url += "&callback="+name;
      else url += "?callback="+name;
      
      // Create script
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      
      // Setup handler
      window[name] = function(data){
        script.parentNode.removeChild(script);
        script = null;
        delete window[name];

        resolve(data);
      };
      
      // Load JSON
      document.getElementsByTagName('head')[0].appendChild(script);
    });

    return promise;
  };
})();;// https://remysharp.com/2016/10/10/one-devtools-trick
let $$ = (expr, ctx = document) => Array.from(ctx.querySelectorAll(expr));;function synchronousLoop(data, processData, done = () => {}) {
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