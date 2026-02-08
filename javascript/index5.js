const obj1= {
    key1:1,
    key2:2,
}
const obj2=Object.create(obj1);//this line setting obj1 as proto of obj2
//this is another way to make any empty object
// console.log(obj2);
obj2.key3=3;
// console.log(obj2.key2);
console.log(obj2);
// __proto__ and [[prototype]] is same
console.log(obj2.__proto__);
//.name is use for finding name of the function 
function hello(){
    console.log('hello');
}
//console.log(hello.prototype);
//only function provide prototype property
//prototype ko khali object ke jaisa treat karo
// if(hello.prototype){
//     console.log('present');
// }
// else{
//     console.log('not present');
// }
// hello.prototype.abc='abc';
// hello.prototype.xyz='xyz';
// hello.prototype.sing=function(){
//     return 'LALLALA';
// }
// console.log(hello.prototype.sing());
function createUser(firstName,lastName,email,age,address){
   // const user=Object.create(createUser.prototype);//{}
   //agar user waale create kiye h to user likhana h this ki jagah;
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
    return this;
}
createUser.prototype.about=function(){
    return `${this.firstName} ${this.lastName} is ${this.age} year old.`;
}
createUser.prototype.is18=function(){
    return this.age >= 18;
}
createUser.prototype.sing=function(){
    return "LA LA LA LA ";
}
const user1=new createUser("Shubham","kumar","Shubham@gmail.com",19,"sahghfkfgkdkg");
const user2=new createUser("Anushka","jaiswal","anushka@gmail.com",19,"fsgffukhgu");
const user3=new createUser("Suhana","Raj","suhana@gmail.com",19,"dsagdgfiadfihj");
console.log(user1);
console.log(user2.about());

//new keyword
//1. empty object create krta h
//2. return this empty object
//3.onject.create(createUser.prototype); waala kaam bhi khud kr dega ;

//class keyword
//classes are fake in js
class createUser1{
    constructor(firstName,lastName,email,age,address){
        console.log('constructor is called');
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address; 
    }
    about(){
        return `${this.firstName} ${this.lastName} is ${this.age} year old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "LA LA LA LA "; 
    }
}
const user4=new createUser1("Shubham","kumar","Shubham@gmail.com",19,"sahghfkfgkdkg");
const user5=new createUser1("Anushka","jaiswal","anushka@gmail.com",19,"fsgffukhgu");
const user6=new createUser1("Suhana","Raj","suhana@gmail.com",19,"dsagdgfiadfihj");
console.log(user4);
console.log(user5.about());
console.log(Object.getPrototypeOf(user4));

//animal class
class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSupercute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}
// const animal1=new animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());

class dog extends animal{
    //dog is sub class and animal is parent class
    constructor(name,age,speed) {
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}m/s.`
    }
}
const tomy= new dog("Tommy",3,45);
console.log(tomy.run());

// getter and setters
class Person{
    constructor(firstName,lastName,age) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    static classInfo(){
        return 'This is person class';
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
const person1=new Person("Shubham","kumar",19);
console.log(person1.fullName);
person1.fullName="Anushka Jaiswal"
console.log(person1);

//static method and properties
console.log(Person.classInfo());

//the first phase of js is compilation phase 
//it includes pharsing
//2nd phase is code execution phase;
// in js code executes inside execution context 
//->global execution context is created first
    // ->it includes creation phase and code execution context//screenshot
//js is a synchronous programing language  and also single threaded
//it is also called lexical scope language

//closures
function printfullname(firstName,lastName){
    function printname(){
        console.log(firstName,lastName);
    }
    return printname;
    //yaha pe printna,e apane saath firstname amd lastname ko sath me leke return hua h 
}
const ans= printfullname("Shubham","Kumar");
ans();
//example 2
// function myFunction(power){
//     return function(number){
//         return number**number;
//     }
// }
const myFunction=(power)=> (number)=> number**number;
const cube=myFunction(3);
const ans1=cube(3);
console.log(ans1);

//example 3
function func(){
    let counter=0;
    return function(){
        if(counter<1){
            console.log("Hi you called me");
            counter++;
        }
        else{
            console.log("mai already call ho chuka hu");
        }
    }
}
const fun1=func();
fun1();
fun1();