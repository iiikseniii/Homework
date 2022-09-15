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
        this.state *= 1.5;
    }
    
    set state (value) {

        if(value <= 0) {
           this._state = 0;
        } else if(value > 100) {
           this._state = 100;
        } else{
            this._state = value;
        }
    }
   
    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
    
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;

    }
}

class NovelBook extends Book{
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount );
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

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
 
    addBook(book){
      if(book.state > 30)
      this.books.push(book)
    
    }

    findBookBy(type, value) {
       let findBook = this.books.find(i => i[type] === value);
        if(findBook !== undefined){
        return findBook;
       }  else{
        return null;
       }
    }

    giveBookByName(bookName) {
        let findIndexBook = this.books.findIndex(element => element.name === bookName);
        if(findIndexBook !== -1){
            let giveBook = this.books[findIndexBook];
            this.books.splice(findIndexBook, 1);
            return giveBook;
         } else{
            return null;
        }
    }
} 

//3
class Student{
    constructor(name){
      this.name = name;
      this.marks = {};
     }
   
    addMark(mark, subject){
        if((mark <= 1) || (mark >5)){
            console.log("Ошибка, число от 1 до 5");
        } else if(Object.keys(this.marks).includes(subject)){
            this.marks.[subject].push(mark);
        }else{
            this.marks[subject]=[mark];
        }
    }
    
    getAverageBySubject(sbj){
        if((sbj in this.marks) === false){
                console.log("Несуществующий предмет")
            }
        let arr = this.marks[sbj];
        let sum = arr.reduce((acc, num) => acc + num, 0);
        let avg = sum / arr.length;
        return console.log(`Средняя балл по предмету ${sbj} : ${avg}`)
    }        
    getAverage(){
        let sum = 0;
        let marksLength = 0;
        for( let key in this.marks) {
            sum += Object.values(this.marks[key]).reduce(((acc, mark) => acc + mark),0);
            marksLength += this.marks[key].length;
        }
        let avg = sum /marksLength;
        return console.log(`Средний балл по всем предметам ${avg}`)
    }

    exclude(reason){
        delete this.marks;
        this.exclude = reason;
    }
  }