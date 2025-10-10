const name = 'Nizhniy Novgorod'
const birthYearOfSity = 1221
const date = null
const userName = {
    name: 'Mariya',
    gender: 'fem'
}
let age
const isTrue = true
const isFalse = false
console.log(typeof(name))
console.log(typeof(birthYearOfSity))
console.log(typeof(date))
console.log(typeof(userName))
console.log(typeof(age))
console.log(typeof(isTrue))
console.log(typeof(isFalse))

console.log(name)
console.log(birthYearOfSity)
console.log(date)
console.log(userName)
console.log(age)
console.log(isTrue)
console.log(isFalse)

// явное преобразование в тип строки string
console.log(String(birthYearOfSity))
console.log(String(date)) 
console.log(String(userName))
console.log(String(isTrue))
console.log(String(isFalse))

console.log(Number(age)) /* явное преобразование в тип строки number и получаем NaN*/
console.log(Number(name)) /* явное преобразование в тип строки number и получаем/


*/
console.log(Number(isFalse)) /* явное преобразование в тип строки number и получаем 0 */
console.log(Number(isTrue)) /* явное преобразование в тип строки number и получаем 1 */

console.log(typeof +name) /* неявное преобразование в тип строки number */
console.log(typeof +age) /* неявное преобразование в тип строки number */

let test = 'аромат'
let test2 = 'ярмарка'
console.log(Boolean(test)) /* всегда правда, потому что тип данных string */
console.log(Boolean(test2)) /* всегда правда, потому что тип данных string */
console.log(test == test2) /* сравнивает побуквенно, и по первым буквам "а" не равно "я", поэтому ложь*/
console.log(date == age) /* при нестрогом сравнении равны друг другу */
console.log(date === age) /* строгое сравнение этих значений приводит к false */