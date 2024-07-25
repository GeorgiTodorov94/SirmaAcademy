function multiply(numA, numB) {
    return numA * numB;
}

const multiplyingXbyY = multiply.bind(null, 5);

console.log(multiplyingXbyY(6));