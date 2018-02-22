/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;

    for (var i = 0; i <= preferences.length - 1; i++) {
        var n = i + 1;
        var k = preferences[i];
        if (k === n) continue;
        if (k > preferences.length) continue;
        if (k === preferences[i + 1]) continue;
        var first = k - 1;
        if (first !== i) {
            first = preferences [first] - 1;
            if (preferences[first] - 1 === i) {
                count++;
                preferences[i] = 0
            }
        }


    }
    return count;
};


