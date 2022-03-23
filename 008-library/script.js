function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
/*
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, `+ ((this.read)?'already read':'not read yet');
    }*/
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, `+ ((this.read)?'already read':'not read yet');
}

let myLibrary = [];

function addBookToLibrary(book){
    myLibrary.push(book);
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolien', 295, false);
console.log(book1.info());