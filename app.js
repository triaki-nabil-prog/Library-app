const title = document.querySelector(".bookTitle");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const submit = document.querySelector(".submit");
const displayDiv = document.querySelector(".booksList");
const cards = document.getElementsByClassName("card");
let myLibrary = [];

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.readStatus = readStatus;
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
        newCard.id = i;
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

        const checkContainer = document.createElement("label");
        checkContainer.htmlFor = `book${i}`;
        checkContainer.classList.add("checkContainer");
        newCard.appendChild(checkContainer);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.name = "readStatus";
        check.id = `book${i}`;

        checkContainer.appendChild(check);

        const styledCheck = document.createElement("span");
        styledCheck.classList.add("mark");
        checkContainer.appendChild(styledCheck);

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

    if (event.target.matches(".deleteButton")) {

        const deleteButtons = document.querySelectorAll(".deleteButton");

        deleteButtons.forEach(function (button) {
            button.addEventListener("click", (e) => {
                
                var index = e.target.id;
                myLibrary.splice(index, 1);
                const card =document.getElementById(index);
                card.remove();
            });
        });
    }
});



