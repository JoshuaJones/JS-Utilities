function setCookie(name, value, props = {}) {
    let exp = props.expires;
    let updatedCookie;

    if (typeof exp === "number" && exp) {
        let d = new Date();

        d.setTime(d.getTime() + exp * 1000);

        exp = props.expires = d;
    }

    if (exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value);
    updatedCookie = name + "=" + value;

    for(let propName in props){
        let propValue;

        updatedCookie += "; " + propName;
        propValue = props[propName];

        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}