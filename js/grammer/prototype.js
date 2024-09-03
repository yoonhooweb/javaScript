/* 
    prototype에서 지정한 메소드는 메모리에 딱 한번만 만들어진다.
    그것을 이 앞에 있는 생성자가 new라는 키워드로 만들어내는 인스턴스에서 사용할 수 있다.
*/

const userName = {
    firstName : 'Jo',
    lastName : 'YoonHoo',
    getName : function (){ 
        return `${this.firstName} ${this.lastName}`
    },
};

console.log(userName.getName());


function location_name (first , last) {
    this.firstArea = first;
    this.lastArea = last;

    console.log("this : " + this);
}

const locationName = new location_name("율량동", "청주");

/* console.log(locationName); */


function User ( first, last ) {
    this.firstName = first;
    this.lastName = last 
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

const tdst = new User("조","윤후");

console.log(tdst.getFullName());