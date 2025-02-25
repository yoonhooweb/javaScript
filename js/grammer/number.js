const pi = 3.141592654;

console.log(pi);

/* 
    toFixed() : 고정소수점 표기법으로 표시한다. 데이터는 반올림으로 표시되며 반환되는 데이터는 문자열이다.
*/

const resultPi = pi.toFixed(3);

console.log(typeof resultPi + ' ' + resultPi);  // string 3.142

/* 
    parseInt() : 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
*/

const integer = parseInt(resultPi)  
console.log(integer); // 3

const float = parseFloat(resultPi)
console.log(float); //3.142

/* 
    Math.abs() : 함수는 주어진 절대값을 반환한다.
*/

function MathAbs(first, second) {
    return Math.abs(first - second);
}

console.log(MathAbs(3, 5));

console.log('abs : ',Math.abs(-12));
console.log('min :', Math.min(2, 22));
console.log('max :', Math.max(2, 22));
console.log('ceil :', Math.ceil(3.14));  //올림처리 자바스크립트는 기본적으로 정수에서 올림을 한다.
console.log('floor :', Math.floor(3.14)); // 내림처리
console.log('round :', Math.round(3.14)); // 반올림
console.log('random :', Math.random()); //랜덤
console.log('random :', Math.floor(Math.random() * 45)); //랜덤


