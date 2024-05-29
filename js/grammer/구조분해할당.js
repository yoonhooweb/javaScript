

/* 
    배열 구조분해 할당
    red 값이 필요없는경우 [, blue, yellow ] 이런식으로 사용하면 red값 가지고오지않는다.
*/
const colors = ['red', 'blue', 'yellow'];
const [,blue,yellow] = colors;

console.log(blue);

/* 
    객체 구조할당
    객체의 경우 이름이 있기 때문에 위 배열과 같이 위치를 지정해주지 않아도 찾아올수있다.
*/

const Colors = {
    orage : 'orage',
    red : 'red',
    white : 'white'
}

const { orage, red, white} = Colors;



