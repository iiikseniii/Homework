function parseCount (value){
    let x = Number.parseInt(value);
    if(isNaN(x)) throw new Error("Невалидное значение")
    else{
        return x
    }
}

function validateCount(value){
    try {
        return parseCount(value);
    } catch(err){
        console.log(err.message);
        return err;
    }
}

///2 Треугольник
class Triangle{
    constructor(a, b, c){
      this.a = a;
      this.b = b;
      this.c = c;
      if (a > b + c || b > a + c || c > a + b) {
        throw new Error ("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter(){
       return  this.a + this.b + this.c;
    }

    getArea(){
        const p = (this.a + this.b + this.c) / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c){
    try{
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch(err) {
        let triangle = {};
        triangle.getPerimeter = () => {
            return "Ошибка! Треугольник не существует";
        }
        triangle.getArea = () => {
            return "Ошибка! Треугольник не существует";
        }
    }
}