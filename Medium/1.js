/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
    let newArr = str.split('');
    newArr.forEach(element => {
        console.log(element);
    });
}
module.exports = logEachLetter