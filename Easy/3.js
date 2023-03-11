/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив
(массив, содержащий другие массивы) чисел и число из одного из вложенных массивов,
а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1

*/

const nestedArr = (arr, number) => {
    
    for (let eachArr of arr) {
        for (let i=0; i <= eachArr.length; i++){
            if (eachArr.includes(number)) {
                return arr.indexOf(eachArr);
            }
        } 
    } 
    
}

module.exports = nestedArr
