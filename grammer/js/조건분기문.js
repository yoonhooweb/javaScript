/* 
    if문과 switch문 은 같은 비교를 하지만
    if 문의 경우 비교하는데 사용을 많이 하고
    switch 문의 경우 값이 일치하는데 많이 사용하긴 하지만 
    결과적으로는 같은 비교문이다.
*/

let a = 2;

if (a === 10) {
    console.log("맞다");
} else {
    console.log("아니다");
}

if ( a === 10 && a === 20) {
    console.log("맞다");
} else {
    console.log("아니다");
}

switch( a ) {
    case 1 : 
        console.log(1);
        break;
    case 2 :
        console.log(2);
        break;
    case 3 :
        console.log(3);
        break;
    default : 
        console.log(" ?? ");
        break;
}