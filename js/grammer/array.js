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
    .map : 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 생성
    원본 배열은 변경되지 않는다.
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

/* 
    fileter : 주어진 함수의 테스트를 통과하는 모든요소를 새로운 배열로 반환
    원본 배열은 변경되지 않는다.
*/

const f = numbers.map(number =>{
    return number < 3;
})

console.log(f);

const c = numbers.filter(number => {
    return number < 3;
});

/* 
    .find : 주어진 함수를 만족하는 첫번째 요소의 값을 반환 없다면 undefined를 반환한다.
    .findIndex : 주어진 함수를 만족하는 첫번째 요소의 인덱스를 반환한다 없다면 -1을 반환한다.
    .indexOf : 배열안에 해당 요소가 몇번째 있는지 확인한다 없다면 -1을 반환한다.
    .includes : 배열안에 요소가 있는지 확인한다. true, false로 반환한다.
*/

const find = numbers.find(number => {
    return number > 3;
})

console.log(find);

const findIndex = numbers.findIndex(number => {
    return number > 3;
})

console.log(findIndex);

const indexOf = numbers.indexOf(3);

console.log(indexOf);

const includes = numbers.includes(3);
const includes2 = fruits.includes('orange');
console.log(includes);
console.log(includes2);


/* 
    .push() : 배열의 끝에 요소를 추가한다. 배열의 길이를 반환한다. 원본이 수정됨
    .unshift() : 배열의 앞에 요소를 추가한다. 원본이 수정됨
    .reverse() : 배열의 순서를 뒤집는다. 원본이 수정됨
    .splice(시작인덱스, 지울개수, 새롭게추가할데이터) : 배열의 특정 부분을 삭제하거나 교체할때 사용된다. 원본 수정됨 
*/

numbers.push(6);
numbers.push("new seven");
console.log(numbers);

numbers.splice(2,0,222);
console.log(numbers);
