// const allbutton=document.querySelectorAll(".My-buttons button");
// for(let button of allbutton){
    //     button.addEventListener("click",function(){
        //     console.log(this.textContent);
        // });
        // }
//jab bhi mai kisi element pe event listner add hoga janane ke liye screenshot dekhe 

// for(let button of allbutton){
//     button.addEventListener("click",(e)=>{
//     //     console.log(e.currentTarget.textContent);
//     // });
//     e.target.style.backgroundColor='yellow';
//     e.target.style.color="#333";

// });
// }
// //keypress event
// const body=document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })

// after whole project is completed it is from lec 3
//setTimeout
//ye hame browser provide krta
// console.log("start script");
// const id=setTimeout(()=>{
//     console.log("Hello world");
// },1000);
// for(let i=0;i<100;i++){
//     console.log(".....");
// }
// console.log("settimeout id is",id);
// console.log("clearing timeout");
// clearTimeout(id);
// console.log("script end");

//setInterval
// console.log("start script");
// setInterval(()=>{
//     console.log(Math.random());
// },1000);
// console.log("script end");
// simple project to stop colour changing
// const body=document.body;
// const button=document.querySelector(".button")
// const intervalId=setInterval(()=>{
//     const red =Math.floor(Math.random()*126);
//     const green =Math.floor(Math.random()*126);
//     const blue =Math.floor(Math.random()*126);
//     const rgb=`rgb(${red},${green},${blue})`;
//     body.style.background =rgb;
// },1000);
// console.log(intervalId);
// button.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     button.textContent=body.style.background;
// })

// callback function instead of callback we can write anything
function getTwoNumberAndAdd(n1,n2,x){
    console.log(n1, n2);
    x(n1,n2);
}
function addTwoNumber(n1,n2){
    console.log(n1+n2);
}
getTwoNumberAndAdd(4,5,addTwoNumber);
//see screenshot for pyramid of doom
//Promise
