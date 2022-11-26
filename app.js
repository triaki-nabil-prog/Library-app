const title = document.querySelector(".bookTitle");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const submit = document.querySelector(".submit");
const displayDiv = document.querySelector(".booksList");
const cards = document.getElementsByClassName("card");
let myLibrary = [];

function book(title, author, pages,readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
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
        displayDiv.prepend(newCard);

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
        buttonDel.id = i;
        newCard.appendChild(buttonDel);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.name = "name";
        check.value = "value";
        check.id = "id";
        check.classList.add("status");
        
        newCard.appendChild(check);
    }
}

const grid = new book("Overgeard", "park Saenal", "1429");
myLibrary.push(grid);
const solo = new book("Solo Leveling", "Mackoy Macasampon", "350");
myLibrary.push(solo);
const talesOfDemonsAndGods = new book("Tales of Demons and Gods", "Mad Snail", "495");
myLibrary.push(talesOfDemonsAndGods);
display();

submit.addEventListener("click", addBookToLibrary);
displayDiv.addEventListener("mouseover", (event) => {
    event.stopPropagation();
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(function (e) {
        e.addEventListener("click", (e) => {
            var index = e.target.id;
            console.log(index);
            myLibrary.splice(index, 1);
            displayDiv.innerHTML = ''
            display();
        });
    });
});



