// //see screen shot on dom tree
// const rootnode=document.getRootNode();
// const Htmlelementnode=  rootnode.childNodes[0];
// console.log(Htmlelementnode.childNodes);
// const headelementnode= Htmlelementnode.childNodes[0];
// const textelementnode= Htmlelementnode.childNodes[1];
// const bodyelementnode=Htmlelementnode.childNodes[2];
// console.log(headelementnode);
// console.log(textelementnode);
// console.log(bodyelementnode);
// console.log(headelementnode.parentNode);
// // sibling relation 
// console.log(headelementnode.nextSibling);
// console.log(headelementnode.nextElementSibling);
const h1=document.querySelector("h1");
const div =h1.parentNode.parentNode;//body pe gya
div.style.color="efefef";
div.style.backgroundColor='#333';