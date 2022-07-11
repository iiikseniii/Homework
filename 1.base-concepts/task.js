"use strict"; //строгий режим

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  const d = b ** 2 - 4 * a * c;  // Дискриминант

  if( d > 0 ){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  } else if ( d === 0 ) {
    arr.push( -b/(2*a) );
  } else {
    return arr;
  }

  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  //проверка типа данных 

  
  if (typeof percent !== "Number" && Number.isNaN(percent) && percent === underfined ){
      return console.log(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (typeof contribution !== "Number" && Number.isNaN(contributiont) && contribution === underfined){
      return console.log(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}" `);
    }
 
  if (typeof amount !== "Number" && Number.isNaN(amount) && amount === underfined){
      return console.log(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  // тело кредита = сумма кредита - первоночальный взнос

  let S = +(amount - contribution); 

  //Срок кредита в месяцах
  
  function monthDiff(){
    let date1 = new Date().toLocaleDateString();  //сегодня
    let date2 = date; //передаваемая дата
    

    let months;
    months = (date2.getFullYear() - date1.getFullYear()) * 12; //года в месяцы
    months -= date1.getMonth() + 1; //+ полные месяцы 
    months += date2.getMonth();

    return months <= 0 ? 0 : months; // 0 или количество месяцев
  } 
 
  let n = monthDiff();

  //Процентная ставка
  let P = (percent / 100) / 12 ;

  // ежемесячный платеж
   let monthRate = +(S *(P + (P / ((Math.pow(1 + P, n)) - 1)))).toFixed(2);

  //Общая сумма

  totalAmount = + (monthRate * n).toFixed(2);

  console.log(n );
  return totalAmount;
}

console.log(calculateTotalMortgage() );