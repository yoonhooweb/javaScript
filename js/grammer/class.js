/* function User ( first, last ) {
    this.firstName = first;
    this.lastName = last 
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

const myName = new User("조","윤후");

console.log(myName.getFullName());


function Car (name, color) {
    this.name = name;
    this.color = color;
}

Car.prototype.getCarName = function () {
    return `${this.name} ${this.color}`
}
const hyundai = new Car("sonata","흰색");

console.log(hyundai.getCarName()); */



/* 
    constructor 라는 내부 함수를 사용해서 값을 받아야한다.
    constructor(first, last){} : function(first, last){} 라는 문법이랑 동일하다.
    constructor는 class 내부에서만 사용 가능하다.
    하나의 생성자에서 여러 property를 받을수 있다.
*/
// 아래 예제는 위 prototype 예제와 동일 하며, class 문법으로 변경한 것
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullname() {
        return `${this.firstName} ${this.lastName}`;
    }
    getName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const name = new User("조", "윤후")
let name2 = new User("dd","dd");
console.log(name.getFullname());
console.log(name2.getName());
