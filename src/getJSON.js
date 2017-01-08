// simple getJSON vs loadJSONP
function getJSON(url) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");

    url += (url.indexOf('?') > -1) ? '&' : '?';
    url += 'rand=' + Math.random();

    script.setAttribute("src", url);
    document.getElementsByTagName('head')[0].appendChild(script);
};