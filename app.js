const title = document.querySelector(".book-title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const form = document.getElementById('form');
const displayDiv = document.querySelector(".books-list");
const cards = document.getElementsByClassName("card");
const readStatus = document.querySelector("#style-lable");
const readStatusDisplay = document.querySelector(".read");
let myLibrary = [];

function book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(event) {
    const newBook = new book(title.value, author.value, pages.value, readStatus.checked);
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
        buttonDel.classList.add("delete-button");
        buttonDel.textContent = "X";
        buttonDel.id = i;
        newCard.appendChild(buttonDel);

        const checkContainer = document.createElement("label");
        checkContainer.htmlFor = `book${i}`;
        checkContainer.classList.add("check-container");
        newCard.appendChild(checkContainer);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.name = "read-status";
        check.id = `book${i}`;
        check.checked = myLibrary[i].readStatus;
        checkContainer.appendChild(check);

        const styledCheck = document.createElement("span");
        styledCheck.classList.add("mark");
        styledCheck.id=i;
        checkContainer.appendChild(styledCheck);
    }
}

form.addEventListener("submit", addBookToLibrary);

readStatus.addEventListener("click", (e) => {
    if (readStatus.checked == true) {
        readStatusDisplay.textContent = "Read";
        readStatusDisplay.style.color = "#669BBC";
    }
    else {
        readStatusDisplay.textContent = "Not Read";
        readStatusDisplay.style.color = "#FDF0D5";
    }
});

displayDiv.addEventListener("mouseover", (event) => {
    
    if (event.target.matches(".delete-button")) {
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach(function (button) {
            button.addEventListener("click", (e) => {
                const index = e.target.id;
                myLibrary.splice(index, 1);
                displayDiv.innerHTML = "";
                display();
            });
        });
    }

    else if (event.target.matches(".mark")) {
        const booksChecks = document.querySelectorAll(".mark");
        booksChecks.forEach(function (checked) {
            checked.addEventListener("click", (e) => {
                const index = e.target.id;
                myLibrary[index].readStatus = !myLibrary[index].readStatus;
            });
        });
    }
    event.stopPropagation();
});

const grid = new book("Overgeard", "park Saenal", "1429", true);
const solo = new book("Solo Leveling", "Mackoy Macasampon", "350", false);
const talesOfDemonsAndGods = new book("Tales of Demons and Gods", "Mad Snail", "495", true);

myLibrary.push(grid);
myLibrary.push(solo);
myLibrary.push(talesOfDemonsAndGods);

display();
