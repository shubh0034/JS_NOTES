const bucket=['coffee','chips','vegetables','salt','rice'];
//producing promise
const firedRicePromise= new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fired Rice");
    }
    else{
        reject("couldn't make it");
    }
})
//ye ek tarika h
// //comsumung promise
// firedRicePromise.then((myfiredRice)=>{
//     console.log("Lets eat ",myfiredRice);//jab promise resolve hoga 
// },(error)=> console.log(error)//jab promise reject hoga 
// )
//ye dusara
//comsumung promise
firedRicePromise.then((myfiredRice)=>{
    console.log("Lets eat ",myfiredRice);//jab promise resolve hoga 
}).catch((error)=> console.log(error))

//setTimeOut
setTimeout(()=>{
    console.log("Hello from settimeout");
},5)
function ricePromise(){
    const bucket=['coffee','chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fired Rice");
    }
    else{
        reject("couldn't make it");
    }
})
}
ricePromise().then((myfiredRice)=>{
    console.log("Lets eat ",myfiredRice);//jab promise resolve hoga 
}).catch((error)=> console.log(error))

function mypromise(){
    return new Promise((resolve,reject)=>{
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        },2000)
    })
}
mypromise()
.then(()=> console.log("resolve"))
.catch(()=> console.log("rejected"))

// promise.resolve
// const mipromise=Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//     console.log(value)
// })

// then()
//hamesa promise return krta h 
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}
myPromise().then((value)=>{
    console.log(value);
    value+="bar";
    return value;
}).then(value=>console.log(value))