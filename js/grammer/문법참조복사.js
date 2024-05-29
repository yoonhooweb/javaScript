let a = 10;
let b = a;

if ( b === a) {
    console.log("같다" + "a : " + a + "***" + "b :" + b);
} else {
    console.log("아니다" + "a : " + a + "***" + "b :" + b);
}

//객체는 복사되지 않고 항상 값이 참조가 된다.
 let test = { 
    loding : false
}

let test2 = test;

test.loding = true;

console.log(test.loding);