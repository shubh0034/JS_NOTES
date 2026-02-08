//arrays
let x;
const arr=[34,56,78,89];
arr.push(23);
arr.pop();
arr.unshift(70);
arr.shift();
//arr.reverse();
x=arr.includes(7);
x=arr.indexOf(789);
x=arr.slice(1,4);
//x=arr.splice(1,4);changes the array
console.log(x);
//nested array
const fruits=['apple','pear','orange'];
const berries=['strawberry','blueberry','rasberry'];
//fruits.push(berries);
x=fruits.concat(berries);
x=[...fruits,...berries];
const arr1=[1,2,[3,4],5,[6,7],8];
x=arr1.flat();
x=Array.from('14473');
const a=1,b=2,c=9;
x=Array.of(a,b,c);
console.log(x);

//object
const person={
    name:'John Doe',
    age:'89',
    isAdmin:true,
    address:{
        street:'123 Main st',
        city:'Dehri',
        state:'Bihar',
    },
    hobbies:['music','dance'],
};
x=person.name;
x=person['age'];
x=person.address.state;
x=person.hobbies[0];
delete person.age;
person.haschildern=false;
person.greet=function(){
    console.log(`Hello, my name is ${this.name}`);
};
person.greet();
x=person
console.log(x);
//another way to implement object
const todo = {};
todo.id=1;
todo.name='Shubham kumar';
todo.comp=false;
x=todo;
console.log(x);

const person1={
    address1:{
        coords:{
            lat:23.46,
            lng: 39.908,
        },
    },
};
x=person1.address1.coords.lat;
console.log(x);
const obj1={a: 1,b: 2};
const obj2={c: 3,d: 4};
const obj3={...obj1,...obj2};
const obj4=Object.assign({},obj1,obj2);
console.log(obj4);

const todos=[
    {id:1,name:'Buy Milk'},
    {id:2,name:'Pick kids from school'},
    {id:3,name:'Take out trash'},
];
x=todos[0].name;
x=Object.values(todos);
x=Object.keys(todos);
x=Object.keys(todos).length;
x=Object.entries(todos);
x= todos.hasOwnProperty('age');
console.log(x);

const firstname='John';
const lastname='Doe';
const age2=37;

const person2={
    firstname,
    lastname,
    age2,
};
console.log(person2.age2);

const t={
    id:1,
    title:'hello guys',
    user:{
        name:'shubh',
    },
};
const {id,title,user}=t;
console.log(user);

const a1=[23,45,67,78];
const [first,second,...rest]=a1;
console.log(a1);

//functions
function add(n1,n2){
    console.log(n1+n2);
    return n1-n2;
    console.log(34);
}
const y=add(23,45);
console.log(y);

function registeruser(user='Bot'){
    return user + ' is registered';
}
console.log(registeruser());

function sum(...numbers){
    let total=0;
    for(const num of numbers){
        total += num;
    }
    return total;
}
console.log(sum(1,2,3,4));
//arrayds params
function getrandom(...arr){
    const randomIndex=Math.floor(Math.random()*arr.length);
    const item=arr[randomIndex];
    console.log(item);
}
getrandom(1,2,3,4,5,6,7,8,8,10);
//function delclaration 
function addDollarSign(value){
    return '$'+ value;
}
console.log(addDollarSign(100));
//function expression
const addPlusSign = function(value){
    return '+'+value;
};
console.log(addPlusSign(200));

//Arrow function
const add1 =(a,b)=>{
    return a+b;
};
console.log(add1(23,45));
//implicit return
const sub =(a,b)=> a-b;
console.log(sub(23,4));
// can leave off() with a single param

//returning object
const ob = ()=> ({
    name:'Brad',
});
console.log(ob());

const nu=[1,2,3,4,5];
nu.forEach((n) => console.log(n));//arrow function is callback

//IIFE 
(function (){
    const user1 ='John';
    console.log(user1);
    const hello =()=> console.log('Hello from IIFE');
    hello();
})();

(function (name){
    console.log('Hello '+ name);
})('Shawn');