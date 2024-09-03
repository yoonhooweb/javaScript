/* 
    indexOf()란 : 객체에서 주어진 값과 일치하는 첫번째 인덱스를 반환합니다. 일치하는값이 없으면 -1을 반환한다.
*/

let txt = 'hello world!';

let result = txt.indexOf('world');

console.log(result); // 6

const str = '0123';

console.log(str.length);

/* 
    slice(시작, 끝나는직전)란 : 문자열의 일부를 추출하면서 새로운 문자열을 반환한다.
*/

console.log(txt.slice(0,3)); //hel

/* 
    replace("바꿀 문자열", "교체할 문자열")
*/

console.log(txt.replace(" world!", "월드~"));

/* 
    match() : 문자열이 정규식과 매치되는 부분을 검색한다.
*/
let email = "showil20@naver.com"

console.log(email.match(/.+(?=@)/)[0]);