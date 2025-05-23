"use strict";
class Book {
    constructor(shelfNumber, bookTitle, author) {
        this.available = true;
        this.shelfNumber = shelfNumber;
        this.bookTitle = bookTitle;
        this.author = author;
    }
}
class Member {
    constructor(name, age, address) {
        this.borrowBook = []; // to create an array of books that has been borrowed 
        this.name = name;
        this.age = age;
        this.address = address;
    }
    borrow(book) {
        if (book.available) {
            this.borrowBook.push(book); // since book is available put it in the array of borrowed book
            book.available = false; // now that the book has been borrowed it is no longer available in the library, why is this sweeting me lmao
            console.log(`${this.name} borrowed ${book.bookTitle}`);
        }
        else {
            console.log(` Sorry ${this.name}, ${book.bookTitle} is unavailable, would you like to try a different book?`);
        }
    }
    return(book) {
        // first let's check if the book is in the array of borrowed books using the indexOf
        const index = this.borrowBook.indexOf(book);
        if (index !== -1) //that is if the book is part of the array of borrowed books then we can remove it using splice
         {
            this.borrowBook.splice(index, 1);
            book.available = true; // book is now availabele since it has been removed from array of borrowed books
        }
    }
}
const book1 = new Book(190, "purple hearts", "Chima Amanda");
const book2 = new Book(180, "Half a yellow sun", "Chimamanda Ngozi Adichie");
const Abby = new Member("Abby", 16, "18 Adebiyi Street");
const Joy = new Member("Joy", 18, "Ikoyi");
const Chinwe = new Member("Chinwe", 21, "Lagos island");
console.log(book1);
console.log(book2);
console.log(Abby);
console.log(Joy);
Abby.borrow(book1);
Joy.borrow(book1);
Joy.borrow(book2);
Abby.return(book1);
Chinwe.borrow(book1);
