function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

exports.hello = function () {
    return "Hello, World!";
}

exports.getRandomArbitrary = function (min, max) {
    return Math.random() * (max - min) + min;
}
