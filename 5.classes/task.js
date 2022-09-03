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
      this.marks = { 
        algebra:[],
        geometry:[],
        biology: [],
      };
     }
   
  
    addMark(mark, subject){
        if(this.marks === undefined){ 
            this.marks = { 
                algebra:[],
                geometry:[],
                biology: [],
            };
        }

        if((mark <= 1) || (mark >5)){
            console.log("Ошибка, число от 1 до 5");
        }
          //Существование предмета
        if((subject in this.marks) === false){
            console.log("Ошибка, предмета не существует")
        }

       return this.marks[subject].push(mark);
   
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
        let arr1 = this.marks.algebra;
        let arr2 = this.marks.geometry;
        let arr3 = this.marks.biology;
        
        let superArr =[].concat(arr1,arr2, arr3)
        let sum = superArr.reduce((acc, num) => acc + num, 0);
        let avgAll = sum / superArr.length;
        return console.log(`Средний балл по всем предметам ${avgAll}`)
    }

    exclude(reason){
        delete this.marks;
        this.exclude = reason;
    }
  }
/*

  const student1 = new Subject(5,"geology");
  const student2 = new Student("Дима Петухов");
  
  const classBook = "Типовой школьный журнал";
  student1.addMark(2,"biology")
  student1.addMark(4,"geology")
  console.log(student1)
  */