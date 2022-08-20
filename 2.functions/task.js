// Задание 1
function getArrayParams(arr) {
  let min =  Infinity
      max = -Infinity, 
      sum = 0, 
      avg = 0;

  // Ваш код
  min = Math.min(...arr);
  max = Math.max(...arr);
  
 /* 
 for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
  }

   avgCount = sum / arr.length;
   avgCount.toFixed(2);
   avg = Number(avgCount);
   */

  avgCount = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
  avg = Number(avgCount);

  return { min: min, max: max, avg: avg };
}
console.log( getArrayParams([-99, 99, 10]));


// Задание 2

// Сумма элементов массива
function worker(arr) {
  let sum =0;
  for (i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  return sum;
}
//console.log(worker([4, 5, 6]))


//Применение функции к массиву

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  // Ваш кода
  
  for (let i = 0; i < arrOfArr.length; i++){
    if(func(arrOfArr[i]) > max){
      max = func(arrOfArr[i]);
    }
  }
  return max;
}
//let arrOfArr = [[1, 2, 3], [4, 5, 6]];
//console.log(makeWork(arrOfArr, worker))



// Задание 3
function worker2(arr) {
  // Ваш код 
  let min =arr[0]; 
  let max = min;

// Ваш код
for (let i = 0; i < arr.length; i++ ) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}

let diff = max - min;
return Math.abs(diff);
}

console.log(worker2([-10, -20, -40]));
console.log(worker2([10, 20, 30]));

let arrOfArr = [[-10, -20, -40], [10, 20, 30]];
console.log(makeWork(arrOfArr, worker2));