// 1. Сумма чисел от 1 до N
// Напиши функцию sumTo(n) , которая возвращает сумму всех чисел от 1 до n .

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
alert( sumTo(20) );

// 2. Степень числа
// Напиши функцию pow(base, exponent) , которая возводит base в степень exponent с помощью цикла.

function pow(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
alert( pow(3, 2) );

// 3. Подсчёт чётных чисел
// Функция countEven(n) должна вернуть количество чётных чисел от 1 до n .

function countEven(n) {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (typeof n[i] === 'number' && n[i] % 2 === 0) {
      count++; 
    }
  }
  return count;
}