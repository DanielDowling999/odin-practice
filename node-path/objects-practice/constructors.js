function Book(title, author, pages, read){
    if (! new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author=author;
    this.pages=pages;
    this.read = read;

    this.info = function(){
        let readmsg = "";
        if (this.read){
            readmsg = " already read";
        }
        else{
            readmsg = " not read yet"
        }
        let msg = this.title + " by " + this.author + ", " + this.pages + " pages," + readmsg;
        return msg;
    }
}


const newBook = new Book("Alpha", "Beta", 256, false);
console.log(newBook.info());