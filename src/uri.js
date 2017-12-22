function URI(uri) {
    this.parse(uri);
}

URI.prototype.parseSearch = function (search) {
    var query = {};
    if (search.length > 1) {
        search.slice(1).split('&').forEach(function (s) {
            var pair = s.split('=');
            var key = decodeURIComponent(pair[0].replace(/\+/g, ' '));
            var value = pair.length === 1 ? '' : decodeURIComponent(pair[1].replace(/\+/g, ' '));
            if (query[key] == null) {
                query[key] = value;
            } else {
                if (query[key].constructor !== Array) {
                    query[key] = [query[key]];
                }
                query[key].push(value);
            }
        });
    }
    return query;
};

URI.prototype.parse = function (uri) {
    var uriObject = null;
    if (uri) {
        uriObject = document.createElement('a');
        uriObject.href = uri;
        // IE doesn't populate all link properties when setting .href with a relative URL,
        // however .href will return an absolute URL which then can be used on itself
        // to populate these additional fields.
        uriObject.href = uriObject.href;
    } else {
        uriObject = window.location;
    }

    this.protocol = uriObject.protocol;
    this.hostname = uriObject.hostname;
    this.port = uriObject.port;
    this.search = uriObject.search;
    this.hash = uriObject.hash;
    this.query = this.parseSearch(uriObject.search);
    // pathname doesn't include the leading slash in IE
    this.pathname = uriObject.pathname;
    if (this.pathname.charAt(0) !== '/') {
        this.pathname = '/' + this.pathname;
    }
};

URI.query = function (name) {
    var search = window.document.location.search;
    if (search) {
        var rs = new RegExp("(^|)" + name + "=([^\&]*)(\&|$)", "gi").exec(search);
        if (rs && rs.length > 2) {
            return rs[2];
        }
        return '';
    } else {
        return '';
    }
};

URI.getSecondaryDomain = function (host, primaryDomains) {
    if (!primaryDomains) {
        primaryDomains = ['worktile'];
    }
    var secondaryDomain = "";
    var arrs = host.split(".");

    if (arrs && arrs.length > 2 && arrs[2] !== "") {
        var primaryDomain = arrs[1];
        if (primaryDomains.includes(primaryDomain) && ['www', 'api'].indexOf(arrs[0]) < 0) {
            secondaryDomain = arrs[0];
        }
    }
    return secondaryDomain;
};

export default URI;