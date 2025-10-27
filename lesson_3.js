// // УРОВЕНЬ 1

// задание 1
let age = prompt('Сколько тебе лет?', '');
if (age < 18) alert('Доступ запрещён!');
else {alert('Доступ разрешён!')};

// задание 2
let age = prompt('Скольо тебе лет?', '');
(age < 18) ?
alert('Доступ запрещён!') : alert('Доступ разрешён!');

// задание 3
let day = prompt('Введите число');
switch (day) {
case '1': 
alert('Понедельник');
break;
case '2': 
alert('Вторник');
break;
case '3':
alert('Среда');
break;
case '4':
alert('Четверг');
break;
case '5':
alert('Пятница');
break;
case '6':
alert('Суббота');
break;
case '7':
alert('Воскресенье');
break;
default:
alert('Ошибка: такого дня нет!')
}

// задание 4
let a = 1;
do {
alert(a);
a++;
} while (a < 6);

// задание 5
for (let i = 1; i < 11; i++) {
  alert(i ** 2);
}

// УРОВЕНЬ 2

// задание 1
const isAdmin = true;
const hasToken = false;
if (isAdmin || hasToken) {
  alert ('Доступ разрешён!');
}
else alert ('Нет доступа');

// задание 2
const x = 13;
alert(x >= 10 && x <= 20 && x !== 15);

// задание 3
const n = prompt ('Введите число', '');
while (n >= 0) {
console.log(n);
n--;
}

// задание 4
for (let value = 1; value <= 10; value++) {
  if (value === 7) continue;
  if (value === 9) break;
  alert(value);
}

// задание 5

let result;
let a = 20;
let b = 30;
let c = 45;
if (a >= b && a >= c) {
  result = a;
} else if (b >= a && b >= c) {
  result = b;
} else {
  result = c;
}
alert(result);

// УРОВЕНЬ 3

// задание 1
let temperature = prompt ('Напишите температуру в градусах Цельсия', '');
if (temperature < -30) {
  alert('Оставайтесь дома!');
} else if (temperature <= -10) {
  alert('Сегодня холодно');
} else if (temperature <= 5) {
  alert('Не холодно');
} else if (temperature <= 15) {
  alert('Тепло');
} else if (temperature <= 25) {
  alert('Очень тепло');
} else if (temperature <= 35) {
  alert('Жарко');
} else if (temperature > 35) {
  alert('Пекло!');
}

// задание 2
let role = prompt ('Введите учётные данные', '')
switch (role) {
  case 'admin':
    alert('Добро пожаловать, администратор!');
    break;
  case 'manager':
    alert('Привет, менеджер!');
    break;
  case 'user':
    alert('Рады видеть вас снова!');
    break;
  case 'guest':
    alert('Пожалуйста, войдите в систему');
    break;
  default:
    alert('Ошибка');
}

// заданиие 4
for (let gagarinBday = 0; gagarinBday = 1961; gagarinBday++) {
  alert(gagarinBday);
  break;
}

