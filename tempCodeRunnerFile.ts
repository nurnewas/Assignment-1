


type Book = {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (books: Book): string => {
    const availability = books.isAvailable ? "Yes" : "No";
    return `(Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${availability})`;
}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);