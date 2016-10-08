const loadJSONP = (function(){
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
})();