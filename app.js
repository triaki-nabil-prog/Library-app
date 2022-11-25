let title = document.querySelector(".bookTitle");
let author = document.querySelector(".author");
let pages = document.querySelector(".pages");
let submit = document.querySelector(".submit");
let displayDiv = document.querySelector(".booksList");
let deleteButtons = document.getElementsByClassName("deleteButton");
const cards = document.getElementsByClassName("card");
let myLibrary = [];


submit.addEventListener("click", addBookToLibrary);





function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(event) {
    const newBook = new book(title.value, author.value, pages.value)
    myLibrary.push(newBook);
    display();
    event.preventDefault();
}

function display() {

    for (let i = cards.length; i < myLibrary.length; i++) {

        const newCard = document.createElement("div");
        newCard.classList.add('card');
        displayDiv.appendChild(newCard);

        const newTitle = document.createElement("div");
        newTitle.classList.add("title");
        newTitle.textContent = ` Title : ${myLibrary[i].title}`;
        newCard.appendChild(newTitle);

        const newAuthor = document.createElement("div");
        newAuthor.classList.add("author");
        newAuthor.textContent = ` Author : ${myLibrary[i].author}`;
        newCard.appendChild(newAuthor);

        const newPages = document.createElement("div");
        newPages.classList.add("pages");
        newPages.textContent = ` Pages : ${myLibrary[i].pages}`;
        newCard.appendChild(newPages);

        const buttonDel = document.createElement("button")
        buttonDel.classList.add("deleteButton");
        buttonDel.textContent = "X";
        newCard.appendChild(buttonDel);


    }

}



const grid = new book("Overgeard", "park Saenal", "1429");
myLibrary.push(grid);
const solo = new book("Solo Leveling", "Mackoy Macasampon", "350");
myLibrary.push(solo);
const talesOfDemonsAndGods = new book("Tales of Demons and Gods", "Mad Snail", "495");
myLibrary.push(talesOfDemonsAndGods);
display();




