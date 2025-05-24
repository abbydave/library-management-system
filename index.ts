class Book{
    shelfNumber: number;
    bookTitle: string;
    author: string;
    available: boolean = true;

    constructor(shelfNumber: number, bookTitle: string, author: string){
        this.shelfNumber = shelfNumber;
        this.bookTitle = bookTitle;
        this.author = author;
    }
}

class Member{
    name: string;
    age: number;
    address: number|string;
    borrowBook: Book[] = []; // to create an array of books that has been borrowed 

    constructor(name: string, age: number, address: number|string){
        this.name = name;
        this.age = age;
        this.address = address;
     
    }

    borrow(book: Book) {
        if(book.available){
            this.borrowBook.push(book); // since book is available put it in the array of borrowed book
            book.available = false; // now that the book has been borrowed it is no longer available in the library, why is this sweeting me lmao
        console.log(`${this.name} borrowed ${book.bookTitle}`);}
        else{
            console.log(` Sorry ${this.name}, ${book.bookTitle} is unavailable, would you like to try a different book?`);
        }
   }

   return(book: Book) {
   // first let's check if the book is in the array of borrowed books using the indexOf
   const index = this.borrowBook.indexOf(book);
   if(index !== -1) //that is if the book is part of the array of borrowed books then we can remove it using splice
   {
    this.borrowBook.splice(index, 1);
    book.available = true; // book is now availabele since it has been removed from array of borrowed books
   }
   }
}

class Library{
    private books: Book[]= [];
    private members: Member[] = [];

    bookAdd(book: Book): void{
        this.books.push(book);
    }

    memberAdd(member: Member): void{
        this.members.push(member);
    }

    listBooks(): void{
        console.log("\n Library Book List");
        this.books.forEach(book => {
            console.log(`${book.shelfNumber}. "${book.bookTitle}" by ${book.author} - ${book.available} ? "Available" : "Not Available"`)
        });           
}

listMembers(): void {
    console.log("\n Library Members List");
    this.members.forEach(member => {
         const books = member.borrowBook.map(b => `"${b.bookTitle}"`).join(", ");
        console.log(`${member.name} has borrowed: ${books || "No books"}`)
    })
}
}   

  

const book1 = new Book(190, "purple hearts", "Chima Amanda");
const book2 = new Book(180, "Half a yellow sun","Chimamanda Ngozi Adichie" );
const Abby =  new Member("Abby", 16, "18 Adebiyi Street");
const Joy = new Member("Joy", 18, "Ikoyi");
const Chinwe = new Member("Chinwe", 21, "Lagos island");

/*console.log(book2);
console.log(Abby);
console.log(Joy);
Abby.borrow(book1);
Joy.borrow(book1);
Joy.borrow(book2);
Abby.return(book1);
Chinwe.borrow(book1); */

const library = new Library();
library.bookAdd(book1);
library.bookAdd(book2);
const member1 = new Member("Abigail", 21, "Ikoyi");
library.memberAdd(member1);

library.listBooks();
library.listMembers();

member1.borrow(book1);
library.listBooks();
library.listMembers();

member1.return(book1);
library.listBooks();
library.listMembers();
