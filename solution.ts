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

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);