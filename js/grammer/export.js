/* 
    export : 자바스크립트 내에서 밖으로 함수를 내보낼수 있다.
    export default : 자바스크립트 내에서 함수를 내보낼때 기본적으로 사용하는 키워드, 한 파일에 한번만 사용가능
    { } : 중괄호를 사용하여 여러개의 함수를 내보낼수 있다. 중괄호가 없는경우 export default로 내보낸다.
*/

export default function mathRandom() {
    return Math.random();
}

export function mathMax(a,b){
    return Math.max(a,b);
}