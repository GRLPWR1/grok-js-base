/*

Создайте функцию, которая принимает в качестве аргументов массив строк,
а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/
let arr = ['one', 'seven', 'two', 'three', 'fascinating'];
const longestString = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let string;
    let maxLength = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            string = arr[i];
        }
    }
    return string;
}
console.log(longestString(arr));

module.exports = longestString
