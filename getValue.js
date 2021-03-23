const cache = [1, 1];

function getValue(n) {
    if (n < 1) {
        throw new RangeError('Argument must be >= 1');
    }

    // 1st value is index 0
    n--;

    // check if n was already memoized
    if (cache.length > n) {
        return cache[n];
    }

    for (let i = cache.length; i <= n; i++) {
        // nth value = sum((n-1)th, (n-2)th)
        cache[i] = cache[i - 1] + cache[i - 2];

        if (!isFinite(cache[i])) {
            // the rest is infinite
            return cache[i];
        }
    }

    return cache[n];
}

module.exports = getValue;
