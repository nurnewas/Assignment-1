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

const getLength = (input: inputType): number => {
    if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    return 0
}

// Problem 3
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


// problem 4
type Item = {
    title: string;
    rating: number;
}
const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4);
}

// problem 5
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (user: User[]): User[] => {
    return user.filter(user => user.isActive)
}

// problem 6
type Book = {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (books: Book): void => {
    const availability = books.isAvailable ? "Yes" : "No";
    console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${availability}`);
}

// problem 7
type ArrNum = (string | number)[]
const getUniqueValues = (arr1: ArrNum, arr2: ArrNum): ArrNum => {
    const result: (string | number)[] = [];

    for (const item of arr1) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    for (const item of arr2) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}



// problem 7
type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) {
        return 0;
    }

    return products.reduce((total, product) => {
        let productTotal = product.price * product.quantity;

        if (product.discount !== undefined) {
            productTotal -= (productTotal * product.discount) / 100;
        }

        return total + productTotal;
    }, 0);
}
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
