function parseCount (value){
    let x = Number.parseInt(value);
    if(isNaN(x)) throw new Error("Невалидное значение")
    else{
        return x
    }
}

function validateCount(val){

    let parseCount = function(){
        let y = Number.parseInt(val);
        if(isNaN(y)) throw new Error("Невалидное значение")
        else { 
            return y;
        }
    }
   return parseCount()
}


try{
    parseCount();
}catch(err){
    console.log(err);
    console.log (err.message);
}





///2 Треугольник

class Triangle{
    constructor(a, b, c){
      this.a = a;
      this.b = b;
      this.c = c;
      this.regulationTriangle = function(a, b, c){
        if (a > b + c || b > a + c || c > a + b){
           throw new Error ("Треугольник с такими сторонами не существует")
        }
        return; 
      }
    }
/*
    sidesOfTriangle = (a, b, c) => {
        if (a > b + c || b > a + c || c > a + b){
            throw new Error ("Треугольник с такими сторонами не существует")
        }
    }
*/
    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        const p = (this.a + this.b + this.c) / 2;
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(S.toFixed(3));
    }
}
function getTriangle(a, b, c){
    return new Triangle(this.a,this.b,this.c)
}
/*
try{
    return { 
        getPerimeter() { 
            return "Ошибка!Треугольник не существует";
        },
        
        getArea(){
            return "Ошибка!Треугольник не существует";
        },

        getPerimeter(){
            return "Ошибка!Треугольник не существует";
        }
    } 
}catch(e){
    console.log(e.message);
}

*/