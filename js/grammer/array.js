// .length
// .concat(합칠 배열명)

const numbers = [1,2,3,4,5];
const fruits = ['apple', 'banana', 'cherry'];

/* console.log(numbers.length);
console.log(numbers);
console.log(fruits[2]);
console.log([1,2].length);
console.log(numbers.concat(fruits));

console.log([].length); */

/*  
    .forEach
    첫번째자리 : 배열의 요소
    두번째자리 : 배열의 인덱스
    세번째자리 : 배열 자체가 들어옴
*/
fruits.forEach(function(element, index, array) {
    console.log(element, index, array);
});

/* 
    .map : 새로운 배열을 만들어서 반환
*/

const a = fruits.map(function(item, index) {
    return `${item} - ${index}`;
})

console.log(a);

// 객체 리터럴 방식

const b = fruits.map(function(item, index) {
    return {
        id : index,
        name : item
    }
});

console.log(b);

