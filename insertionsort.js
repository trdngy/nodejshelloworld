// insertion sort implementation
const myModule = require('./mymodule');

exports.insertionSort = function (my_list) {
    var A, B, C;

    A = 0;
    B = 1;
    C = my_list.length;

    while (B < C) {
        for (var i = 0; i >= A && i < B; i++) {
            if (my_list[i] > my_list[B]) {
                var tmp = my_list[i];
                my_list[i] = my_list[B];
                my_list[B] = tmp;
            }
        }
        B = B + 1;
    }

    return my_list;
}

// Initialize array
exports.initialize = function () {
    var my_list = []
    for (var i = 0; i < 10; i++) {
        my_list.push(myModule.getRandomArbitrary(0, 9));
    }
    return my_list;
}

