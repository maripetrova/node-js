const getNumber = function (max = 10, min = 0) {
    return Math.floor(Math.random() * (max-min) + min)
}

module.exports = {getNumber}