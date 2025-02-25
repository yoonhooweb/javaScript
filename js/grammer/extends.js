/* 
    - extends : 상속을 뜻한다.
    - 기본문법 :
    class A extends B {
        
    }
    - 상속은 기본적으로 새로운 클래스로 확장 혹은 상속을해 기본적인 내용을 내부에서 사용하겠다란 의미를 가짐
    - super : extends 키워드 뒤쪽에 붙어있는 확장된 클래스 즉 상속하는 Vehicle 을 의미하며, super가 있는 그 자리는 Vehicle이 실행된다.
*/

class Vehicle {
    constructor (name, wheel) {
        this.name = name;
        this.wheel = wheel;
    }
    vehicleRandom() {
        return `${this.name} ${this.wheel}`
    }
}

const MyVehicle = new Vehicle("운송수단" , 4); 
console.log(MyVehicle);
console.log(MyVehicle.name);
console.log(MyVehicle.vehicleRandom());

class Bicycle extends Vehicle {
    constructor (name, wheel) {
        super(name, wheel);
    }
}

const bike = new Bicycle("자전거", 2);
const doBike = new Bicycle("세발", 3);
console.log(bike)
console.log(doBike)

class Car extends Vehicle {
    constructor(name , wheel, licens) {
        super(name,wheel,licens);
        this.licens = licens;
    }
}

const newCar = new Car("투싼",4,"1종보통");
console.log(newCar.licens);




