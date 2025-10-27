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
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      count++; 
    }
  }
    return count;
}
alert(countEven(10));

// 4. Факториал числа
// Реализуй factorial(n) с помощью цикла.

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(7) );

// // 5. Повтор строки
// // Напиши функцию repeatText(text, count) , которая возвращает строку, повторённую count раз подряд (без String.repeat ).

function repeatText(text, count) {
 let result = '';
 for (let i = 0; i < count; i++) {
  result += text;
 }
 return result;
}
alert(repeatText('Привет!', 3));

// 6. Числа в диапазоне
// Функция printRange(start, end) выводит все числа от start до end (включительно).

// !!!!! почему последнее undefined???

function printRange(start, end) {
  for (let value = start; value <= end; value++) {
    alert(value);
  }
}
alert(printRange(5, 15));

// 7. Подсчёт цифр
// Функция countDigits(num) возвращает, сколько цифр в числе num.


function countDigits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.trunc(num / 10);
    count++
  }
    return count;
}
alert(countDigits(1234));

// 8. Сумма цифр числа
// Функция sumDigits(num) находит сумму всех цифр числа (используя % и Math.floor ).

function sumDigits(num) {
  let sum = 0;
  let number = Math.abs(num);
  while (number > 0) {
  sum += number % 10;
  number = Math.floor(number / 10)
  }
  return sum;
}
alert(sumDigits(25));

// 9. Таблица умножения
// Функция printTable(n) выводит таблицу умножения для числа n (от 1 до 10).

function printTable(n) {
  if (typeof n !== 'number') {
    return;
  }
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(`${n} * ${i} = ${result}`);
  }
}
console.log(printTable(6));

// 10. Обратный отсчёт
// Функция countdown(from) выводит все числа от from до 1.

// !!!!! почему последнее undefined???

function countdown(from) {
  for (let i = from; i >= 1; i--) {
    alert(i);
  }
}
alert(countdown(10));

// 11. Числа Фибоначчи
// Функция fibonacci(n) возвращает n -е число Фибоначчи.

function fibonacci(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert(fibonacci(n));

// 12. Реверс числа
// Функция reverseNumber(num) возвращает число в обратном порядке цифр.

function reverseNumber(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
alert(reverseNumber(1234));

// 13. Проверка на палиндром (число)
// Функция isPalindrome(num) возвращает true , если число читается одинаково в обе стороны.

function isPalindrome(num) {
  if (num < 0 || (num % 10 === 0 && num !== 0)) {
    return false;
  }
  let result = 0;
  let number = num;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return number === result;
}
alert(isPalindrome(2112));


// 14. Нахождение делителей
// Функция divisors(n) выводит все числа, на которые делится n без остатка.

function divisors(n) {  
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
    alert(i);
    }
  }
}
alert(divisors(10));

// 15. Простое число
// Функция isPrime(n) возвращает true , если число простое.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
alert(isPrime(5));
alert(isPrime(1));


