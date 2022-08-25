// Задача 1
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount){

        this.name = name;

        this.releaseDate = releaseDate;

        this.pagesCount = pagesCount;

        this.type = null;

        this.state = 100;
    }
    

    fix () {
        this.state = 100 * 1.5;
        return;
    }
    
    set state (value) {

        if(value <= 0) {
            return this._state = 0;
        } else if(value > 100) {
           return this._state = 100;
        } else{
            return this._state = value;
        }
    }
   
    get state () {
        return this._state;
    }
}


// Журнал

class Magazine extends PrintEditionItem {

    constructor (name, releaseDate, pagesCount){
        
        super(name, releaseDate, pagesCount);

        this.type = "magazine";
    }
    
}

// Книги

class Book extends PrintEditionItem {

    constructor (author, name, releaseDate, pagesCount) {
        
        super(name, releaseDate, pagesCount);

        this.type = "book";

        this.author = author;

    }
}

// Новела -рассказ
class NovelBook extends Book{

    constructor (author, name, releaseDate, pagesCount) {

        super(author, name, releaseDate, pagesCount );
        
        this.type = "novel";
    }
}

//Фантастика
class FantasticBook extends Book{

    constructor (author, name, releaseDate, pagesCount) {

        super(author, name, releaseDate, pagesCount);

        this.type = "fantastic";
    }
}

// Детектив
class DetectiveBook extends Book{

    constructor (author, name, releaseDate, pagesCount) {

        super (author, name, releaseDate, pagesCount);

        this.type = "detective";
    }
}





// Задача 2 Библиотека


class Library {

    constructor(name){
       
        this.name = name;
        this.books = [];
    }
 
    addBooks(book){
       book = this.book;
        if(this.state > 30){
          return this.books.push(book);
        }
     }

// type -ключ (тип,автор, название, год),  value- искомое значение
    findBookBy(type, value) {}


    giveBookByName(bookName) {}
}


