function sumFourNumbers(numA, numB, numC, numD) {
    
    return numA + numB + numC + numD;
}

function partialSum(argumentNumberValue) {

    return function (numB, numC, numD) {

        return sumFourNumbers(argumentNumberValue, numB, numC, numD);

    };
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); 