function dataPrivacy() {
    let value = 0;

    return {
        incrementValue: function () {
            value++;
        },
        getValue: function () {
            return value;
        }
    };
}

const counter = dataPrivacy()

counter.incrementValue();

console.log(counter.getValue()); 