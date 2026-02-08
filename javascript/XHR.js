// jab tak readystate 4 nhi ho jata tab tak response nhi milega 
//see from 2:20 from lect 3 of harshish vasisth

//call back

// const URL="https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onload = ()=>{
//     const response= xhr.response;
//     const data=JSON.parse(response);
//     console.log(data);
//     const id=data[3].id;
//     const xhr2=new XMLHttpRequest();
//     const URL2=`${URL}/${id}`
//     console.log(URL2);
//     xhr2.open("GET",URL2);
//     xhr2.onload=()=>{
//         const data2= JSON.parse(xhr2.response)
//         console.log(data2);
//     }
//     xhr2.send()
// }
// xhr.onerror=()=>{
//     console.log("network error");
// }
// xhr.send();

//by promise

const URL="https://jsonplaceholder.typicode.com/posts";
function sendRequest (method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=()=>{
            if(xhr.status >=200 && xhr.status<300){
                resolve(xhr.response)
            }
            else{
                reject(new Error("somthng went wrong"))
            }
        }
        xhr.send();
    })
}

// const whatisthis =sendRequest("GET",URL);
// console.log(whatisthis);
sendRequest("GET",URL)
    .then(response =>{
        const data= JSON.parse(response)
        console.log(data);
        return data
    })
    .then(data=> {
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        const url=`${URL}/${id}`
        return sendRequest("GET",url);
    })
    .then(newResponse=>{
        console.log(newResponse);
    })