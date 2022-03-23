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

const book1 = new Book('The Hobbit', 'J.R.R. Tolien', 295, false);
const book2 = new Book('Game of Thrones', 'George R. R. Martin', 694, true);
const book3 = new Book('Dune', 'John Schoenherr', 412, false);
let myLibrary = [book1, book2, book3];

function addBookToLibrary(book){
    myLibrary.push(book);
}

const grid = document.querySelector(".grid")
function displayBooks() {
    myLibrary.forEach((book) => {
        const display = document.createElement('div');
        display.classList.add('card');

        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = book.title;
        display.appendChild(title);

        const author = document.createElement('h4');
        author.classList.add('author');
        author.textContent = book.author;
        display.appendChild(author);

        const pages = document.createElement('h3');
        pages.classList.add('pages');
        pages.textContent = `Pages: ${book.pages}`;
        display.appendChild(pages);

        const readBtn = document.createElement('button');
        readBtn.classList.add('readBtn');
        if (book.read){
            readBtn.textContent = 'Read'
        }
        else {
            readBtn.textContent = 'Not Read'
        }
        display.appendChild(readBtn);
        grid.appendChild(display);
    })
}

displayBooks();