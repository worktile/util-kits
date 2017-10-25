function get(name) {
    var nameEqual = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        // there will be spaces after ';'
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEqual) === 0) {
            return cookie.substring(nameEqual.length, cookie.length);
        }
    }
    return null;
}

function set(name, value, options) {
    var expires = options.expires;
    var domain = options.domain;
    var path = options.path;
    var secure = options.secure;
    var httponly = options.httponly;

    var expiresDate = expires ? new Date(
        // in case expires is an integer, it should specify the number of days till the cookie expires
        typeof expires === 'number' ? new Date().getTime() + (expires * 864e5) :
        // else expires should be either a Date object or in a format recognized by Date.parse()
        expires
    ) : null;

    document.cookie = (name + '=' + value) +
        (expiresDate && expiresDate.getTime() >= 0 ? ';expires=' + expiresDate.toUTCString() : '') +
        (domain ? ';domain=' + domain : '') + // Add domain
        (path ? ';path=' + path : '') + // Add path
        (secure ? ';secure' : '') + // Add secure option
        (httponly ? ';httponly' : '');
}

export {get, set };

export default function(name, value, options) {
    options = options || {};
    // set
    if (value !== undefined) {
        set(name, value, options);
    } else {
        return get(name);
    }
}