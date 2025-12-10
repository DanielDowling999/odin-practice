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

function Hero(name, level){
    this.name=name;
    this.level=level;
}

function Warrior(name, level, weapon){
    Hero.call(this, name, level);
    this.weapon=weapon;
}
function Healer(name, level, spell){
    Hero.call(this, name, level);
    this.spell=spell;
}

let hero1 = new Warrior('Bjorn', 1, 'axe');
let hero2 = new Healer('Kanin', 1, 'cure');

const newBook = new Book("Alpha", "Beta", 256, false);
console.log(newBook.info());
console.log(hero1)
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Hero.prototype.greet=function(){
    return `${this.name} says hello.`;
}

Warrior.prototype.attack=function(){
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal=function(){
    return `${this.name} casts ${this.spell}.`;
}