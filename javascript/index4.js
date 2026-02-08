// js is single treaded language
// for execution context see the screen shots taken 
// for call stack see the screen shots 
// logic statements are same as c
// var is function scoped
// const email='tset@test.com';
// if (email){
//     console.log("you passed an email");
// }
// console.log(Boolean(email));
//empty list or empty object has true value means it passes the if statements 
// && returns the first falsy value or the last value 
// || returns first true value or the last value 
//?? returns the right side operand when the left is null or undefined
c=10??20;
c=null;
//console.log(c);
//see the screen shots
let a=null;
a ||= 20;
console.log(a);
let b=30;
b &&=40;
console.log(b);
c ??=40;
console.log(c);
//ternary operator
const age=18;
age >= 18 ? console.log('you can vote'): console.log('You cannot vote'); 
//Assigning value to the varriable 
const canvote=age >=18 ? true : false;
console.log(canvote);
const auth = true;
let redirect;
redirect = auth ? (alert('Welcome to the dashboard'),'/dasboard'): (alert('Access Denied'),'/login');
console.log(redirect);
//loops are same as c
//for of loop
const items=['boook','tabke','chair','kiet'];
for (const item of items){
    console.log(item);
}//same for objects
// for in loops
const colorObj ={
    c1:'red',
    c2:'green',
    c3:'orange',
};
for (key in colorObj){
    console.log(key);
}
const colorArray =['red','green','yellow','blue'];
for(const color in colorArray){
    console.log(color);
}
// ForEach
const socials=['Twitter','Linkdin','Facebook','Instagram'];
socials.forEach((item,index,arr) => console.log(`${index} - ${item}`,arr));
//filter
const num=[1,2,3,4,5,6,7,8,9,10,11,12];
const evenNums= num.filter((n) => n%2 === 0);
console.log(evenNums);
//map
const doublenum =num.map((n) => n*2);
console.log(doublenum);
//chain mapping
const sqrtanddouble =num.map((n) => Math.sqrt(n)).map((sqrt) => sqrt*2);
console.log(sqrtanddouble);
//reduce
const sum = num.reduce((acc,curr) => acc+curr, 10);
console.log(sum);
const obj1 ={...[1,2,3,4,5]}
console.log(obj1);
//object destructering 
const band ={
    bandname: "dfdsgfysyyd",
    famousSong: 'dksagdhajjdh',
    year: 1987,
};
const {bandname,famousSong,year} = band;
console.log(bandname);
//hoisting is a process by using this we can call a function before declaring it but this can work in the delecaration part only 
//for ex
hello();
function hello (){
    console.log('hello');
}
//var is function scope 
//const and let is block scope 

//callback function
function myfunc2(name){
    console.log('inside myfunc2');console.log(`your name is ${name}`);
}
function myfunc(a){
    console.log('dsjsdkjhjhjweuhkdisgak');
    a('Shubham');
}
myfunc(myfunc2);

//function returning function
function m(){
    function n(){
        console.log('Hello');
    }
    return hello;
}
const ans=m();
ans();

//reduce 
const usercart =[
    {productId: 1,productName: "mobile",price: 12000},
    {productId: 2,productName: "laptop",price: 120000},
    {productId: 3,productName: "tv",price: 52000},
]

const totalAmount = usercart.reduce((totalprice,currentProduct)=> {
    return totalprice+currentProduct.price;
},0)
console.log(totalAmount);

//sort method
const numbers=[3,5,56,67,4774,534];
//numbers.sort();
//console.log(numbers);
//in sorting it took all as ascii value of first number like in 67 it will check the value of 6
numbers.sort((a,b)=>a-b);
console.log(numbers);

// find method 
const myArray = ["Hello","cat","dog","lion"];
const answ = myArray.find((string)=> string.length===3);
console.log(answ);

//evrey method 
const numbers2 =[2,4,6,8,10];
const ant=numbers2.every((number)=>number%2===0);
console.log(ant);

//some method 
const numbers3 =[3,5,8,9];
const anse= numbers3.some((number)=>number%2===0);
console.log(anse);

//fill method
//const myarray = new Array(10).fill(-1);
//console.log(myarray);
const myarray=[1,2,3,4,5,6,7,8];
myarray.fill(0,2,5);
console.log(myarray);

//splice method
const arrray=['item1','item2','item3'];
//arrray.splice(1,1);
arrray.splice(1,2,"inter1","inter2");
console.log(arrray);
//iterables
//jinpe ham for of loop laga sake
//string ,array,set are iterable

//array like object
//jinke pass lenght property hoti h
//like string

//set 
const s = new Set();
s.add(1);
s.add(2);
s.add(items);
console.log(s.has(1));
console.log(s);
const x =[1,3,3,4,5,5,6,6,7,7,8];
const uniqueset = new Set(x);
console.log(uniqueset);

//maps object
//object keys are always string
//in map we can have key of any type 
// const person = new Map();
// person.set('firstName','Harsit');
// person.set(1,'one');
// console.log(person);
const person={
    id:1,
    firstName:"Shubham",
};
const person2={
    id:2,
    firstName: "Anushka"
}
const extrainfo= new Map();
extrainfo.set(person,{age: 8,gender:"male"});
extrainfo.set(person2,{age:9, gender: "female"});
//console.log(extrainfo);
console.log(person.id);
console.log(extrainfo.get(person).gender);
console.log(extrainfo.get(person2).gender);
//object cloning
const obj ={
    key1: "value1",
    key2: "value2",
}
// const obj2={...obj}; new way of cloning
const obj2= Object.assign({}, obj);//old way
obj.key3="Value3";
console.log(obj);
console.log(obj2);

//optional chaining
//?. is for checking if the property exist or not if not then give undefined

//methods
//function inside object 
function about(hobby , favmusician){
    console.log(`person name is ${this.firstName} and age is ${this.age},hobby is ${hobby} and favmusician is ${favmusician}`);
}
const xy ={
    firstName:"Shubham",
    age: 19,
}
//this wo oject h jo call kr rha h function koll
about.call(xy,"guitar","Arjit");
//.call is used to call a function
//see the above xy onject
const xy2 ={
    firstName:"Anushka",
    age: 18,
}
about.call(xy2,"guitar","Arjit");//if we will not provide anything in the call bracket then undefined will come.

//apply
about.apply(xy,["guitar","arjit"]);
//bind
const fys= about.bind(xy,"guitar","Arjit");
fys();
//arrow function ka this window hota h 
