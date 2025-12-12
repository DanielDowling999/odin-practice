function Book(title, author, pages){
    if (! new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author=author;
    this.pages=pages;
    this.id = crypto.randomUUID();
   

    this.info = function(){
        let msg = this.title + " by " + this.author + ", ID: " + this.id + ", " + this.pages + " pages";
        return msg;
    }
}

function addBookToLibrary(bookLibrary, title, author, pages){
    let bookToAdd = new Book(title, author, pages);
    bookLibrary.push(bookToAdd);
    console.log("Book added: " + bookToAdd.id);
}

function displayLibrary(bookLibrary){
    console.log(bookLibrary);
    const table = document.createElement("table");
    const header = document.createElement("tr");
    header.innerHTML = "<th>Title</th><th>Author</th><th>Pages</th><th>ID</th>";
    table.appendChild(header);
    for(const book of bookLibrary){
        const row = document.createElement("tr");

        row.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.pages}</td> <td>${book.id}</td>`;
        table.appendChild(row);
    }
    return table;


}

let bookLibrary = [];
addBookToLibrary(bookLibrary, "A Bad Book", "Bad Author", 2);
addBookToLibrary(bookLibrary, "An Okay Book", "Okay Author", 24);
addBookToLibrary(bookLibrary, "A Good Book", "Good Author", 200);
addBookToLibrary(bookLibrary, "A Great Book", "Great Author", 265);
addBookToLibrary(bookLibrary, "A Really Long Book", "Verbose Author", 200000);

document.getElementById("table-container").appendChild(displayLibrary(bookLibrary));

