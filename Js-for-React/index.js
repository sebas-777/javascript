
// funciones basicas
function hello() {
    return 'Hola pendejos'
}

console.log(hello())

function add(x,y) {
    return x + y;
} 

console.log(add(5,10))

// objetos 
const user = {
    name :'ryan',
    lastname:'perez',
    age:30,
    address:{
        country:'colombia',
        city:'bogota',
        street:'main street 123',
    },
    friends:['brandom','elena'],
    activate:true,
    sendMail(){
        return 'sending email...'
    }

}

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.sendMail());

//datos

const name = 'laptop';
const price = 3000;

const newProduct = {
    name,
    price
}

console.log(newProduct)

//manipulacion del DOM
const title = document.createElement('h1');
title.innerText = 'Hola mundo desde JS';

const button = document.createElement('button');
button.innerHTML = 'Click';
button.addEventListener('click',function() {
    title.innerText = 'Texto actualizado con JS '
    alert('se realizo un click')
})

document.body.append(title);
document.body.append(button);

// objetos  en el DOM 
const user1 = {
    name:'jose',
    age:30
}

function printInfo(user) {
    return'<h1>Hola ' + user1.name + '</h1>'
    
}

console.log(printInfo(user1));

document.body.innerHTML = printInfo(user1);

//desestructuracion
const user2 = {
    name:'isabella',
    age:10
}

const title2 = document.createElement('h2')
function desestruct({name}) {
    return'<h2>Hola ' + name + '</h2>'
}

console.log(desestruct(user2));
document.body.innerHTML = desestruct(user2);

// funciones anonimas 
console.log(function(){
    return 'Starting...'
}())

const button1 = document.createElement('button')
button1.innerText = 'Click me'

button1.addEventListener('click', function () {
    alert('clicked')
})

document.body.append(button1);

//Arrow Funtion
const rest = (x,y) =>{
    return x - y;
} 

console.log(rest(5,5));

const showText = () => 'Hola estupidos';
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3];
const showObject = () =>({name:'ryan'});

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());

//return function  + string literal 
const background = 'yellow'
const color = 'white'
const isAuthorized = true;


const button2 = document.createElement('button')
button2.innerHTML = "click fuck";
button2.style = 'background: ; color:white'
button2.style =`background:${isAuthorized ? background:'red'}; color:${color}`


button2.addEventListener('click',() =>{
    if(isAuthorized){
        return alert('esta autorizado');
    }

    alert('No esta autorizado')
});

document.body.append(button2);

// Array Method 
const names = ['ryan','joe','maria'];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element)
} 

const nombres =['carlos','maria','jose'];

nombres.forEach(function(nombre){
    console.log(nombre)
}) 

// function map 
const newNames =  names.map(function(name){
    return `Hola ${name}`
})

console.log(names)
console.log(newNames)

//funtion find 

const nameFound = names.find(function(name){
    if(name === 'marcos'){
        return name
    }
    
})
console.log(nameFound)

// function filter

const nameFilter = names.filter(function(name){
    if(name !=='joe'){
        return name
    }
})

console.log(nameFilter);

//function concat
const verduras = ['tomates','cebolla','cilantro'];
const frutas = ['guayaba','mango','fresa'];

console.log(verduras);
console.log(frutas);
console.log(verduras.concat(frutas));

// spread operator 
console.log(...verduras,...frutas);

const car = {
    brand:'ferrari',
    model:2024
}

const address = {
    street:'main street 123',
    city:'medellin'
}

const carInfo = {
    ...car,
    ...address
}

console.log(car);
console.log(address);
console.log(carInfo);

//ECMAScripts modules 
// nos permite importar funciones , constante desde diferentes archivos 


//Optional Chaining 

const person = {
 name:'andrea',
 code:{
    city:'london'
 }   
} 
console.log(person.location?.city)
console.log(person.code.city)

// ASYN AWAIT
const ul = document.createElement('ul');

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// data.forEach(function (post) {
//     const li = document.createElement('li');
//     li.innerText = post.title;
//     ul.append(li);
// });
// document.body.append(ul);
// })
// console.log('linea 2')

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json() 
    console.log(data);
    data.forEach(function (post) {
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}
loadData() 
console.log('linea 2')