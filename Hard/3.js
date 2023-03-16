/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'

Методы toLowerCase() и toUpperCase() меняют регистр символов:

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
Если мы захотим перевести в нижний регистр какой-то конкретный символ:

alert( 'Interface'[0].toLowerCase() ); // 'i'
*/

let str = 'stupid_homer';

const camelCase = (str) => {

    let arr = str.trim().split('');

    for (let i=0; i < arr.length; i++){
        if (arr[i] === "_") {
            let replacement = arr[i+1].toUpperCase();
            arr.splice(i, 2, replacement);
        }
    }
    return arr.join('');
}

console.log(camelCase(str));

module.exports = camelCase