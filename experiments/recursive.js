// usage : rec('a')('b')('c')('d')('e')('f')('g')('h')('i')();
function rec1(n) {
    var g = n;
    if(!g) return "";

    function r(t) {
        if(!t) return g;
        g += " " + t;
        return r;
    }

    r.end = function() {
        return g;
    }
    return r;
}

// usage : rec(1)((x,y)=>x*y)(1)(2)(3)(4)((x,y)=>x+y)(5)(6)()
function rec(n) {
    var g, f;
    if(typeof n === 'function') {
        f = n;
        g = "";
        return r;
    } else {
        f = (a, b) => a + " " + a;
        g = n;
    }
    if(g === undefined) return "";

    function r(t) {
        if(typeof t === 'function') {
            f = t;
        } else {
            if(!t) return g;
            g = f(g, t);
        }
        return r;
    }

    r.end = function() {
        return g;
    }
    return r;
}
