//DOM=document object model
//select an element by get element by id
// console.dir(document.getElementById("main-heading")); //it will return an object
// const mainheading= document.getElementById("main-heading");
// console.log(mainheading);

// select element using query sleector
// const mainheading1= document.querySelector("#main-heading");
// const header=document.querySelector(".header");
// const navitem=document.querySelectorAll(".nav-item")//it will give nodelist
// console.log(navitem);

//change text
//textcontext and inner text
// console.log(mainheading.textContent);//this will give all the text content
// mainheading.textContent="This is something else";
// console.log(mainheading.textContent);
// console.log(mainheading.innerText);//this will give what is being displayed on the website

//change the style of the element
// const mainHeading=document.querySelector("div.headline h2");
// console.log(mainHeading);
// mainHeading.style.backgroundColor="blue";
// mainHeading.style.border="20px solid green";

//get and set attribute
// const link =document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// const inputelement=document.querySelector(".form-todo input");
// console.log(inputelement.getAttribute("type"));
// link.setAttribute("href","https://www.instagram.com/");
// console.log(link.getAttribute("href"));

//get multiple items using getElemnts by class name
//get multiple items using querrySelectorAll//see line no 10
//we can use all loops with node list
// const navItems=document.getElementsByTagName("a");//htmlCollection dega ye
// console.log(navItems[2]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));
//we cannot use forEach loop with htmlcollection
// let x=Array.from(navItems);
// console.log(Array.isArray(x));
// for(navitem1 of navItems){
//     navitem1.style.backgroundColor="white";
//     navitem1.style.color="green";
//     navitem1.style.fontWeight="bold";

// }

// const sectiontodo=document.querySelector(".todo-section");
// console.log(sectiontodo.classList);
// sectiontodo.classList.add("bg-dark");
// sectiontodo.classList.remove("bg-dark");
// sectiontodo.classList.toggle("bg-dark");//yaha add kiya
// sectiontodo.classList.toggle("bg-dark");//yaha hata diya
//css ko upar se niche dekhata h
//adding an other element
// const newtodoitem= document.createElement("li");
// const newtodoitemText=document.createTextNode("Teach students");
// newtodoitem.textContent="Teach students";
// const todolist=document.querySelector(".todo-list");
// newtodoitem.append(newtodoitemText);
// console.log(newtodoitem);
// todolist.append(newtodoitem);//prepend will add in the first.
//before and after is also used
//see screen shot

//static list vs live list

//queryselectorAll hame static list degi

// const listItems= document.querySelectorAll(".todo-list li");
// console.log(listItems);
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// const ul=document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);

//getElementBySomething(like id ,class) hame live list dega

// const ul=document.querySelector(".todo-list");
// const listItems= ul.getElementsByTagName("li");
// console.log(listItems);
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// ul.append(sixthLi);
// console.log(listItems);

//ow to get the dimension of element
//sectiontodo as selected in line no. 51
// const info=sectiontodo.getBoundingClientRect();
// console.log(info);

// events 
//event add krne ke teen tarika
// const btn=document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick =()=>{
//     console.log("You clicked me");
// }
//we cannot use this way as onclick ko ek se jyda baar assign nhi kr skte
//method ----- addEventListner

// btn.addEventListener("click",function(){
//     console.log("You clicked me");
//     console.log("value of this");
//     console.log(this);
// });

// btn.addEventListener("mouseover",()=>{
//     console.log("mouseover event occured");
// })
//after 7 hr of second vedio see again

//project
const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list")
console.log(todoInput);
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodoText= todoInput.value;
    const li=document.createElement("li");
    const newLiInnerHtml=`
                <span class="text">${newtodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
            li.innerHTML=newLiInnerHtml;
            todoList.append(li);
});

todoList.addEventListener("click",(e)=>{
    //check if user click on done button
    if(e.target.classList.contains("remove")){
        const targetedli=e.target.parentNode.parentNode;
        targetedli.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
})

// synchronous programing me line by line code execute hota h
//so isme time delay ka khatra hota h
//js synchronous programing single threaded h
 