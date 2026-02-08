const mystring='developer';
let x=mystring[0].toUpperCase();
let y=mystring.slice(1) 
// y=mystring.length;
x=x+y
console.log(x);

//number challenge
x=Math.floor(Math.random()*100+1);
y=Math.floor(Math.random()*50+1);
console.log(`${x} + ${y} =${x+y}`);
console.log(`${x} - ${y} =${x-y}`);
console.log(`${x} * ${y} =${x*y}`);
console.log(`${x} / ${y} =${x/y}`);
console.log(`${x} % ${y} =${x%y}`);

//array challenge
const arr=[1,2,3,4,5];
arr.push(6);
arr.reverse();
arr.push(0);
console.log(arr);
//challenge 2
const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];
x=arr1.concat(arr2.slice(1));
console.log(x);

//Object Challenge
const library=[
    {
        title:'The Road Ahead',
        author:'Bill Gates',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
    {
        title:'Steve Jobs',
        author:'Walter Isaacson',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
    {
        title:'MockinJay',
        author:'falter haster',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
];

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
const {title: firstbook}=library[0];
const libraryJSON=JSON.stringify(library);
console.log(libraryJSON);

//function challenge
const celcius= (f)=>(f-32)*(5/9);;
console.log(`The temperature is ${celcius(40)} celcius`);
//2nd
function minMMax(arr1){
    const min1=Math.min(...arr1);
    const max=Math.max(...arr);
    return{
        min1,
        max,
    };
}
console.log(minMMax([1,2,3,4,5,6]));
//ch2
 ((length,width) =>{
    const area = length*width;
    const output = `The area of a rectangle with a length of  ${length} and a width of ${width} is ${area}`;

    console.log(output);
 })(20,30);

 //loops challeng
 for (let i=1;i<=100;i++){
     if(i%3==0 && i%5==0){
         console.log('FizzBuzz');
         continue;
    }
    else if(i%3==0){
        console.log('Fizz');
        continue;
    }
    else if(i%5==0){
        console.log('Buzz');
        continue;
    }
    console.log(i);
 }