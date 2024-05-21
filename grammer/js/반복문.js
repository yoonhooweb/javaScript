const arr = [1,2,3,4,5,6,7,8];
/* 
    반복문을 돌리기전에는 항상 초기값을 선택해주어야한다.
*/

// 기본 for문
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//while문
i = 0;
while ( i < arr.length ) {
    console.log(arr[i]);
    i++
}

//do while
i = 0;
do {
    console.log(arr[i]);
    i++
} while (i < arr.length);


/* 
    for of 문은 배열을 순회할때 쓰기편하다.
    배열에 특정위치를 알 필요 없을때 사용하기 좋다.
*/
for (let item of arr) {
    console.log(item);
}

/* 
    for in 문
    arr 에 있는 key 값을 넘겨준다.
    key 값을 빼올때 사용한다.
*/
for (let index in arr) {
    console.log(arr[index]);
}

const obj = {
    color : "red",
    width : 200,
    height : 40,
}

for (let key in obj) {
    console.log(obj[key] + " : obj 테스트");
    console.log(obj[key] + " 값의 키는 : " + key);
}