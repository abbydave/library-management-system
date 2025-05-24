var Book = /** @class */ (function () {
    function Book(shelfNumber, bookTitle, author) {
        this.available = true;
        this.shelfNumber = shelfNumber;
        this.bookTitle = bookTitle;
        this.author = author;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(name, age, address) {
        this.borrowBook = []; // to create an array of books that has been borrowed 
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Member.prototype.borrow = function (book) {
        if (book.available) {
            this.borrowBook.push(book); // since book is available put it in the array of borrowed book
            book.available = false; // now that the book has been borrowed it is no longer available in the library, why is this sweeting me lmao
            console.log("".concat(this.name, " borrowed ").concat(book.bookTitle));
        }
        else {
            console.log(" Sorry ".concat(this.name, ", ").concat(book.bookTitle, " is unavailable, would you like to try a different book?"));
        }
    };
    Member.prototype.return = function (book) {
        // first let's check if the book is in the array of borrowed books using the indexOf
        var index = this.borrowBook.indexOf(book);
        if (index !== -1) //that is if the book is part of the array of borrowed books then we can remove it using splice
         {
            this.borrowBook.splice(index, 1);
            book.available = true; // book is now availabele since it has been removed from array of borrowed books
        }
    };
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.bookAdd = function (book) {
        this.books.push(book);
    };
    Library.prototype.memberAdd = function (member) {
        this.members.push(member);
    };
    Library.prototype.listBooks = function () {
        console.log("\n Library Book List");
        this.books.forEach(function (book) {
            console.log("".concat(book.shelfNumber, ". \"").concat(book.bookTitle, "\" by ").concat(book.author, " - ").concat(book.available, " ? \"Available\" : \"Not Available\""));
        });
    };
    Library.prototype.listMembers = function () {
        console.log("\n Library Members List");
        this.members.forEach(function (member) {
            var books = member.borrowBook.map(function (b) { return "\"".concat(b.bookTitle, "\""); }).join(", ");
            console.log("".concat(member.name, " has borrowed: ").concat(books || "No books"));
        });
    };
    return Library;
}());
var book1 = new Book(190, "purple hearts", "Chima Amanda");
var book2 = new Book(180, "Half a yellow sun", "Chimamanda Ngozi Adichie");
var Abby = new Member("Abby", 16, "18 Adebiyi Street");
var Joy = new Member("Joy", 18, "Ikoyi");
var Chinwe = new Member("Chinwe", 21, "Lagos island");
/*console.log(book2);
console.log(Abby);
console.log(Joy);
Abby.borrow(book1);
Joy.borrow(book1);
Joy.borrow(book2);
Abby.return(book1);
Chinwe.borrow(book1); */
var library = new Library();
library.bookAdd(book1);
library.bookAdd(book2);
var member1 = new Member("Abigail", 21, "Ikoyi");
library.memberAdd(member1);
library.listBooks();
library.listMembers();
member1.borrow(book1);
library.listBooks();
library.listMembers();
member1.return(book1);
library.listBooks();
library.listMembers();
