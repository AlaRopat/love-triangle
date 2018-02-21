/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;

    for (var i = 0; i <= preferences.length; i++) {
        var n = i + 1;
        var k = preferences[i];
        if (n === k) continue;
        if (k > preferences.length) continue;


    }
    return count;
};


