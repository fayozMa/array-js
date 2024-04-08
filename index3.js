function sumFromArrays() {
    let array1String = prompt("Sonlar to'plamini kiriting (masalan 1, 2, 3):");
    let array1 = array1String.split(",").map(Number)
                   .filter(num => !isNaN(num)); // Remove non-numeric values
    let array2String = prompt("Sonlar to'plamini kiriting (masalan 1, 2, 3):");
    let array2 = array2String.split(",").map(Number)
                   .filter(num => !isNaN(num));
    let sum = array1.concat(array2).reduce((accumulator, current) => accumulator + current, 0);
    return sum;
  }
  let result = sumFromArrays();
  console.log(result);
  