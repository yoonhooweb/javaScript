/* function User ( first, last ) {
    this.firstName = first;
    this.lastName = last 
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

const tdst = new User("조","윤후");

console.log(tdst.getFullName()); */

/* 
    constructor 라는 내부 함수를 사용해서 값을 받아야한다.
    constructor(first, last) : function(){} 라는 문법이랑 동일
*/
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let yoonhoo = new User('jo', 'yoonhoo');

console.log(yoonhoo);
console.log(yoonhoo.getFullName());


class study {
    constructor (first,last) {
        this.first = first;
        this.last = last;
    }

    subject() {
        return `${this.first} ${this.last}`
    }
}

let newStudy = new study("수학", "영어");

console.log(newStudy);
console.log(newStudy.subject());
