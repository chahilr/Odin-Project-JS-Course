const inputTitle = document.querySelector("#inputTitle");
const inputAuthor = document.querySelector("#inputAuthor");
const inputPages = document.querySelector("#inputPages");
const inputRead = document.querySelector("#inputRead");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    let readMsg = isRead ? "has been read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readMsg}`;
  };
}

function addBookToLibrary() {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  const isRead = inputRead.value;

  inputTitle.value = inputAuthor.value = inputPages.value = "";
  inputRead.value = false;

  console.log(title);
  myLibrary.push(new Book(title, author, pages, isRead));
  displayLibrary();
}

function displayLibrary() {
  const libraryContainer = document.querySelector(".libraryList");
  libraryContainer.innerHTML = "";
  for (let book of myLibrary) {
    let bookContainer = document.createElement("div");
    bookContainer.innerText = book.info();
    libraryContainer.appendChild(bookContainer);
  }
  return;
}
