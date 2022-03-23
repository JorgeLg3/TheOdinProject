// BOOK CLASS
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

Book.prototype.toggleRead = function() {
    this.read = ! this.read;
}

//INITIAL LIBRARY
const book1 = new Book('The Hobbit', 'J.R.R. Tolien', 295, false);
const book2 = new Book('Game of Thrones', 'George R. R. Martin', 694, true);
const book3 = new Book('Dune', 'John Schoenherr', 412, false);
let myLibrary = [book1, book2, book3];

//LIBRARY FUNCTIONS
function addBookToLibrary(book){
    myLibrary.push(book);
}

const grid = document.querySelector(".grid")
function displayBooks() {
    myLibrary.forEach(displayOneBook);
}
    
function displayOneBook(book){
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
        readBtn.textContent = 'Read';
        readBtn.style.cssText = 'background-color: #cbd5e1';
    }
    else {
        readBtn.textContent = 'Not Read';
        readBtn.style.cssText = 'background-color: #94a3b8';
    }
    readBtn.addEventListener('click', toggleReadBtn)
    display.appendChild(readBtn);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-button');
    const closeIcon = document.createElement('span');
    closeIcon.classList.add('material-icons');
    closeIcon.textContent = 'close';
    closeBtn.appendChild(closeIcon);
    closeBtn.addEventListener('click', deleteBook);
    display.appendChild(closeBtn);

    grid.appendChild(display);
}

displayBooks();

//ADD BUTTON (MODAL)
const modalContainer = document.querySelector('.modal-container');
const addBtn = document.querySelector(".add-button");
addBtn.addEventListener('click', () => modalContainer.classList.add('show'));

const closeBtn = document.querySelector('#close-modal');
closeBtn.addEventListener('click', closeModal);
function closeModal(e){
    modalContainer.classList.remove('show');
}

//UPLOAD A BOOK
const upBtn = document.querySelector('#upbook');
upBtn.addEventListener('click', ()=>{
    const title = document.getElementById('input-title').value;
    const author = document.getElementById('input-author').value;
    const pages = document.getElementById('input-pages').value;
    const book = new Book(title, author, pages, false);
    console.log(book.info());
    myLibrary.push(book);
    displayOneBook(book);
    document.getElementById('input-title').value = '';
    document.getElementById('input-author').value = '';
    document.getElementById('input-pages').value='';
    closeModal();
})

//DELETE A BOOK
function deleteBook(e){
    const card = e.target.parentNode.parentNode;
    const title = card.firstChild.textContent;
    console.log(title);
    myLibrary = myLibrary.filter((book) => (book.title != title));
    card.remove();
    console.log(myLibrary);
}

//TOGGLE READ
function toggleReadBtn(e){
    const title = e.target.parentNode.firstChild.textContent;
    const book = myLibrary.find((book) => book.title==title);
    book.toggleRead();
    if (book.read){
        this.textContent = 'Read'
        this.style.cssText = 'background-color: #cbd5e1';
    }
    else {
        this.textContent = 'Not Read'
        this.style.cssText = 'background-color: #94a3b8';
    }
}