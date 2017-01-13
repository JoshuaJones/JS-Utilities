function getQueryVar(slug) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");

    for (let i = 0, l = vars.length; i < l; i++) {
        const pair = vars[i].split("=");

        if (pair[0] === slug) {
            return pair[1];
        };
    };
    return false;
}