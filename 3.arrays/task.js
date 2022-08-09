function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
  return result; 
 }
console.log(compareArrays([2, 2, 2], [2, 2, 2]));
console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));


function advancedFilter(arr) {
  //let resultArr;

  // Ваш код
  let resultArr = arr.filter((n) => n >=0).filter((n)=> n % 3 === 0).map(n => n * 10);
  return resultArr; // array
}
