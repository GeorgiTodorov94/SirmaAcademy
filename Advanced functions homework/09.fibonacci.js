function fibonacciSequence() {
    let initialValue = 0;
    let initializeSequenceValue = 1;

    return function () {
        let consecutiveValue = initialValue + initializeSequenceValue;
        initialValue = initializeSequenceValue;
        initializeSequenceValue = consecutiveValue;
        return initialValue;
    };
}

let fibonacciSequenceValue = fibonacciSequence();
console.log(fibonacciSequenceValue());
console.log(fibonacciSequenceValue());
console.log(fibonacciSequenceValue());
console.log(fibonacciSequenceValue());
console.log(fibonacciSequenceValue());
console.log(fibonacciSequenceValue());
console.log(fibonacciSequenceValue());
console.log(fibonacciSequenceValue()); 
