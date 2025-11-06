
// 1.Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона.

function randomNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumbers(1, 10)); 

// 2. Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

function isString(n) {
  if (n[0] === n[0].toUpperCase()) {
    return true;
  }
  else {
    return false;
  }
}
Console.log(isString(G));

// 3. Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.

