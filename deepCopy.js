function deepCopy(obj) {
    if (obj === undefined || obj === null) return obj;

    if (Array.isArray(obj)) {
        var arr = [];
        for (var i = 0, n = obj.length; i < n; i++) {
            arr.push(deepCopy(obj[i]));
        }
        return arr;
    } else if (typeof obj === 'object') {
        var copy = {};
        for (var x in obj) {
            copy[x] = deepCopy(obj[x]);
        }
        return copy;
    }

    return obj;
}
