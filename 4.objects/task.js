function Student(name, gender, age) {
    // Ваш код
  this.name = name;

  this.gender = gender;

  this.age = age;
}


Student.prototype.setSubject = function (subjectName){
 this.subject = subjectName;
}


// Оценка
Student.prototype.addMark = function(mark){
  if(this.marks === undefined){ 
    marks.push(mark);
    } else {
      marks.push(mark);
      // добавить вторую и последующие оценки в массив
    }
}

Student.prototype.addMarks = function(...mark){
  this.marks = mark;
}

//Среднее арифметическое оценок
/*
Student.prototype.getAverage = function(marks){
  let average = marks.reduce((a, b) => a + b, 0) / marks.length;
  return average;
}
*/
Student.prototype.getAverage = function(marks){
  let sum = 0;
  for( let i =0; i< marks.length; i++){
    sum += marks[i];
  }
  avg= sum / marks.length;
}

//  отчисление 
Student.prototype.exclude = function(reason){

  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);

console.log(student1.getAverage()); 
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
// student2.addMark(2);
// student2.addMark(3);
// student2.addMark(2);
student2.addMarks(4,2,2)
student2.exclude('low grades')
console.log(student2)

