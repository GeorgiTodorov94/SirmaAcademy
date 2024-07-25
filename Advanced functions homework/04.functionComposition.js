function doubleUp(num) {
    return num * 2;
}

function squareUp(num) {
    return num * num;
}

function compose(doubleUp, squareUp) {

    return function (num) {

        return squareUp(doubleUp(num));
    };
}

const doubleThenSquare = compose(doubleUp, squareUp);
console.log(doubleThenSquare(3)); 