// Problem 1
type InputValue = string | number | boolean

const formatValue = (input: InputValue) => {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
}
console.log(formatValue('hello'));