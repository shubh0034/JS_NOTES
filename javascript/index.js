alert('Hello from js file');
console.log(100);
x=100;
console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({name: 'Brad', email: 'brad@gmail.com'});
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World',styles);
//console ended here many more are there for that we can learn in near future
// ctr+shift+left-right button for selecting
//VARIABLE
//ways to declare varriable
//var,let,const
let firstName='John';
let lastName='Goel';
console.log(firstName,lastName);
let age=89;
console.log(age);
let score;
score=1;
if(true){
    score+=1;
}
console.log(score);

const y=100;
const arr=[1,2,3,4];
arr.push(5);
console.log(arr);

const person = {
    name: 'Brad',
};
person.name='John';
person.email='brad@gmail.com';
console.log(person);
console.log(firstName,typeof firstName);
const temp=20.38;
console.log(temp,typeof temp);
console.log(typeof person);

function sayHello(){
    console.log('Hello');
}
console.log(sayHello,typeof sayHello); 

const p={
    name:'bnrd',
    age:40,
};
let newperson=p;
newperson.name='Bradley';
console.log(p,newperson);

let amount =100;
//amount=+amount;//amount=number(amount) parseInt for integer and parseFloat for decimal.
amount=amount.toString();//amont =String(amount);
console.log(amount,typeof amount);
console.log(Math.sqrt(-1));//1+NaN , undefined+undefined,string/number

let d = 2==='2';//double equal only check the value wheras triple equal checks the type also
console.log(d);

let r;
r= 5 + Number('5');
r=5+ true;
console.log(r,typeof r);
//Working on string
const name='John';
const age1 =45;
n=`Hello, my name is ${name} and I am ${age1} years old`;
console.log(n);
let s='dnkjha dfhasjhjhd';
g=s.length;
g=s[0];
g=s._proto_;
g=s.indexOf('j');
g=s.substring(3,8);
g=s.slice(-14,-4);
s=s.replace('dnkjha','hdvhdk')
g=s.includes('hdvhdk');
g=s.valueOf();
g=s.split('');
console.log(g);

let num=new Number(2.877587);
x=num.toString().length;
x=num.toFixed(3);
x=num.toPrecision(3);
x=num.toExponential(3);
x=num.toLocaleString('en-US');
console.log(x);
console.log(num);

//maths object
console.log(Math);
x=Math.sqrt(9);
x=Math.abs(-5);
x=Math.round(3.78);
x=Math.ceil(4.2);
x=Math.floor(2.8);
x=Math.pow(5,7);
x=Math.min(3.5,57);
x=Math.max(89,83,80);
x=Math.random();
x=Math.floor(Math.random()*10);
console.log(x);

//date
let v;
v=new Date();
v=v.toString();
v=new Date(2021,9,4,12,30,0);//indetation start from 0
v= new Date('2021-10-04T12:30:00');
v= new Date('2021/10/04 12:30:00');
v=Date.now();
v=new Date();
v=v.getTime();
v= new Date(1745902488161);//by default time is in milli sec
x=v.getFullYear();
x=v.getMonth()+1;
x=v.getDate();
x=v.getDay();
x=v.getHours();
x=v.getSeconds();
x=v.getMinutes();
x=Intl.DateTimeFormat('en-US').format(v);
x=Intl.DateTimeFormat('default',{month: 'long'}).format(v);
x=v.toLocaleString('default',{month:'short'});
console.log(x);