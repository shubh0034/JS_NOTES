const URL="https://jsonplaceholder.typicode.com/posts";
fetch(URL)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log("error");
    })//fetch me catch sirf network related me us ehota h