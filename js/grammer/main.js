const userName = {
    firstName : 'Jo',
    lastName : 'YoonHoo',
    getName : function (){ 
        return `${this.firstName} ${this.lastName}`
    },
};

console.log(userName.getName());