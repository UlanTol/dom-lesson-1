//! DOM - document object model

//! html selectors
// let btn = document.getElementById('btn');
// // console.log(btn);
// let blocks = document.getElementsByClassName('blocks');
// // console.log(blocks);
// let div = document.getElementsByTagName('div');
// // console.log(blocks);
// let inp = document.getElementsByName('phone');
// console.log(inp);

//! query selectors 
// let btn = document.querySelector('#btn');
// console.log(btn);
// let blocks = document.querySelectorAll('.blocks');
// console.log(blocks);
// let blocks2 = document.querySelectorAll('div');
// let inp = document.querySelectorAll('[name="phone"]');
// console.log(blocks2, inp);

// let container = document.getElementById('container');
// // console.log(container);
// container.innerText = 'hellllo mdfcka';
// container.innerHTML = '<h1>hi dom<h1>';
// container.style.backgroundColor = 'purple';
// container.style.fontStyle = '13px';
// container.style.color = 'white'
// console.log(document.body);
// document.body.style.backgroundColor = 'yellow'



//! for flex
// let container = document.getElementById('container');
// for(let i = 1; i <= 10; i++){
//     let block = document.createElement('div');
//     block.style.width = '100px';
//     block.style.height = '100px';
//     block.style.backgroundColor= 'green';
//     block.style.margin = '10px';
//     container.append(block);
// };
// container.style.display = 'flex';
// container.style.flexWrap = 'wrap';

// console.log(container.firstChild.previousElementSibling);
// console.log(container.firstChild.nextElementSibling);
// console.log(getComputedStyle(container).color);

// let blocks1 = document.querySelectorAll('.blocks');
// //! NodeList - static - only once call to elements and just do not touch them 
// let blocks2 = document.getElementsByClassName('blocks')
// //! HTMLCollection - dynamic permanent 
// blocks1[0].remove();
// blocks2[0].remove();

let inp = document.getElementById('inp')
inp.setAttribute('placeholder', 'search...');
inp.classList.add('new-class');
inp.classList.add('new-class2');
inp.classList.remove('new-class');
inp.classList.toggle('new-class2')
console.log(inp);


