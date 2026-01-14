type InputValue = string | number | boolean;

const formatValue = (input: InputValue): InputValue => {
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




type inputType = string | unknown[];

const getLength = (input: inputType): number => {
    if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    return 0
}


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



type Item = {
    title: string;
    rating: number;
}
const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4);
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (user: User[]): User[] => {
    return user.filter(user => user.isActive)
}


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


type ArrNum = (string | number)[]

const getUniqueValues = (arr1: ArrNum, arr2: ArrNum): ArrNum => {
    const result: ArrNum = [];

    for (const item of arr1) {
        let existsce = false;
        for (const items of result) {
            if (items === item) {
                existsce = true;
                break;
            }
        }
        if (!existsce) {
            result.push(item);
        }
    }

    for (const item of arr2) {
        let existsce = false;
        for (const items of result) {
            if (items === item) {
                existsce = true;
                break;
            }
        }
        if (!existsce) {
            result.push(item);
        }
    }
    return result;
}


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


