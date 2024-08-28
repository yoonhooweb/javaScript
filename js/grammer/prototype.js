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