function Book(title, author, pages, read){
    if (! new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author=author;
    this.pages=pages;
    this.read = read;
    this.id = crypto.randomUUID();
   

    this.info = function(){
        let msg = this.title + " by " + this.author + ", ID: " + this.id + ", " + this.pages + " pages";
        return msg;
    }
}

function addBookToLibrary(title, author, pages, read){
    let bookToAdd = new Book(title, author, pages, read);
    bookLibrary.push(bookToAdd);
    console.log("Book added: " + bookToAdd.id);
}

function displayLibrary(bookLibrary){
    console.log(bookLibrary);
    const table = document.createElement("table");
    const header = document.createElement("tr");
    header.innerHTML = "<th>Title</th><th>Author</th><th>Pages</th><th>Read?</th><th>ID</th>";
    table.appendChild(header);
    for(const book of bookLibrary){
        const row = document.createElement("tr");

        row.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.pages}</td> <td>${book.read}</td> <td>${book.id}</td>`;
        table.appendChild(row);
    }
    return table;
}

const newBookButton = document.getElementById("newBook");
const newBookDialog = document.getElementById("newBookDialog");
const cancelButton = document.getElementById("cancel");
const newBookForm = document.getElementById("newBookForm");
const bookSubmit = document.getElementById("bookSubmit");
const container = document.getElementById("table-container");

newBookButton.addEventListener("click", () =>{
    newBookDialog.showModal();
});

bookSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const title = newBookForm.elements.bookName.value;
    const author = newBookForm.elements.bookAuthor.value;
    const pages = newBookForm.elements.bookPages.value;
    const read = (newBookForm.elements.bookRead.value == "Yes") ? true : false;
    addBookToLibrary(title, author, pages, read);

    container.innerHTML = "";
    container.appendChild(displayLibrary(bookLibrary));
    newBookForm.reset();
    newBookDialog.close();
});

cancelButton.addEventListener("click", () => {
    newBookForm.reset()
    newBookDialog.close();
});


const bookLibrary = [];
addBookToLibrary("A Bad Book", "Bad Author", 2, true);
addBookToLibrary("An Okay Book", "Okay Author", 24, false);
addBookToLibrary("A Good Book", "Good Author", 200, false);
addBookToLibrary("A Great Book", "Great Author", 265, true);
addBookToLibrary("A Really Long Book", "Verbose Author", 200000, true);

document.getElementById("table-container").appendChild(displayLibrary(bookLibrary));

