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
    } else {
        return input;
    }
}



// Problem 2
type inputType = string | any[];

const getLength = (input: inputType):number => {
    if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    } 
        return 0
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));