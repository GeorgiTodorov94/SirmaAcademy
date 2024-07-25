function theReturnOfTheProduct(numA, numB, numC) {
    
    return numA * numB * numC;
}

function curryAFunctionToday(numA) {

    return function (numB) {

        return function (numC) {

            return theReturnOfTheProduct(numA, numB, numC);

        };
    };
}

console.log(curryAFunctionToday(2)(3)(4)); 