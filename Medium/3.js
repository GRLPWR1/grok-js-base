/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    let arr = [];
        if (start <= end) {
            for (i = start; i <= end; i++) {
                arr.push(i);
            }
        } else {
            for (i = end; i <= start; i++) {
                arr.push(i);
                }
        }
        console.log(arr);
    let result = arr.reduce((sum, current) => sum + current, 0);
    return result;
}

module.exports = sumOfIntegers
