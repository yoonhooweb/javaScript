/* 
    this
    일반(Noraml) 함수는 호출 위치에 따라 this 정의
    화살표(arrow) 함수는 자신이 선언된 함수 범위에서 this 정의
*/

function User (name) { //파스칼케이스로 만들어 졌으니 생성자 함수로 생각할 수 있다.
    this.name = name;
}

User.prototype.normal = function () {
    return `${this.name}`;
}

User.prototype.arrow = () => {
    return `${this.name}`;
}

const yoonhoo = new User("yoonhoo");

console.log(yoonhoo.normal());
console.log(yoonhoo.arrow());


const timer = {
    name : 'yoonhoo222',
    timeout : function (){
        // setTimeout(함수, 시간);
        setTimeout(() => {
            console.log(this.name)
        }, 2000) 
    },
    timein : () => {
        setTimeout( () => {
            console.log("타임in", console.log(this.name));
        }, 3000 )
    }
}

timer.timeout();
timer.timein();