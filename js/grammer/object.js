/* 
    assign(타겟객체, 대상객체) : 객체에 속성을 추가하거나 속성값을 반환한다. 대상객체의 속성이 타갯객체에 존재하면 덮어쓴다.
    객체데이터를 복사하여도 바라보는 메모리가 다르기 때문에 서로 영향을 주지않는다.
*/

const userAge = {
    name : 'yoonhoo',
    age : 30
}

const userEmail = {
    name : 'joyoonhoo',
    email : 'showil20@naver.com'
}

const target = Object.assign({},userAge, userEmail);
/* console.log(target); */


/* for (key in target) {
    console.log(`${key} : ${target[key]}`);
} */
