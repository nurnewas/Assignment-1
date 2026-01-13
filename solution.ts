// Problem 1
type InputValue = string | number | boolean;

const formatValue = (input: InputValue) => {
    if (typeof input === "string") {
        return input.toUpperCase();

    } else if (typeof input === "number") {
        return input * 10;
    }

    else if (typeof input === "boolean") {
        return !input
    }
}
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));