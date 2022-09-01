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
            return this.books.splice(findIndexBook, 1);
         } else{
            return null;
        }
    }
} 


//3

class Student{
    constructor(name){
      this.name = name;
     }
   
  
    addMark(mark, sbj){
        if(this.marks === undefined){ 
        this.marks = [];
        }
        if((mark >= 1) && (mark <=5)){
           this.marks.push(mark);
        } else{
          console.log("Ошибка, оценка должна быть числом от 1 до 5")
        }
   
    }
    
    getAverageBySubject(sbj){
       if(sbj === undefined){console.log("Несуществующий предмет")}
   }

    getAverage(){

    }

    exclude(reason){
     delete this.marks;
     delete this.subject;
    }
  }
/*
   class Subject {
      constructor(subject){
        this.subject = subjectName;
        this.marks =[];
      }
  
      addMark(mark, subject){
        if(subject === undefined){console.log("Несуществующий предмет")}
  
        if((mark >= 1) && (mark <=5)){
          this.marks.push(mark);
        }else{
          console.log("Ошибка, оценка должна быть числом от 1 до 5")
        }
      }
    }
  
  const student1 = new Subject(5,"geology");
  const student2 = new Student("Дима Петухов");
  
  const classBook = "Типовой школьный журнал";
  student1.addMark(2,"biology")
  student1.addMark(4,"geology")
  console.log(student1)
  */