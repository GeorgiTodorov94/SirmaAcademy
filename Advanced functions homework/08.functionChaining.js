function setValue(stringArgument = "") {
    this.value = stringArgument
    return this;
}
function toUpperCase() {
    this.value = this.value.toUpperCase();
    return this
}
function toLowerCase() {
    this.value = this.value.toLowerCase();
    return this
}
function toPrint() {
    console.log(this.value);
    return this;
}



const stringManipulator = {
    value: '',

    setValue,

    toUpperCase,

    toLowerCase,

    toPrint,
};

stringManipulator.setValue('Hello')
    .toUpperCase()
    .toPrint()
    .toLowerCase()
    .toPrint();