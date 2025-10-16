// УР1

let age = prompt('Сколько тебе лет?', '');
if (age < 18) alert('Доступ запрещён!');
else {alert('Доступ разрешён!')};

let age = prompt('Скольо тебе лет?', '');
(age < 18) ?
alert('Доступ запрещён!') : alert('Доступ разрешён!');

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

let a = 1;
do {
alert(a);
a++;
} while (a < 6);

for (let i = 1; i < 11; i++) {
  alert(i ** 2);
}

// УР2

