/* let and const
let name = ('nilo');
name = 'dan';
console.log(name);

/*string, numbers, boolean, null, undefined
const name = 'nilo';
const age = 29;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof z);

/* concatenation
const name = 'nilo';
const age = 29;
/* sample of concatenation
console.log('My name is ' + name + ' and i am ' + age);
 /* sample of template string
console.log(`My name is ${name} and i am ${age}`);

/*properties
const s ='hello worlds';
console.log(s.length);

/*methods
const n = 'hello world';
//console.log(n.toUpperCase());
console.log(n.toLowerCase());

/*substrings
const p = 'hello world';
console.log(p.substring(0, 5).toUpperCase());

/*split
const p = 'hello world';
console.log(p.split(''));
/* or 
const p = 'hello, world, nilo, peligro, ampo';
console.log(p.split(','));

/* arrays- variables that hold multiple values 
const colors = ['yellow', 10, true, 'orange', 'red', 'blue', 'black'];
colors[7] = 'pink';
colors.push('green');
colors.unshift('purple');
colors.pop();
console.log(colors.indexOf('pink'));
console.log(Array.isArray(colors));
console.log(colors[4]);
console.log(colors);

/* object literals
const person ={
    firstName: 'Nilo',
    lastName: 'Peligro',
    age: 28,
    hobbies: ['music', 'sports', 'movies'],
    address: {
        purok: 'p-3',
        brgy: 'Duay',
        town: 'Duero',
        province: 'bohol'
    } 
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.brgy);

const { firstName, lastName, address: { brgy }} = person;
console.log(firstName);
console.log(brgy);

/* todos 
const todos = [
    {
        id: 1,
        text: 'take out me',
        isCompleted: true
    },
    {
        id: 1,
        text: 'met today',
        isCompleted: true
    },
    {
        id: 1,
        text: 'urget',
        isCompleted: true
    }
];

console.log(todos);
console.log(todos[1].text);

/* json
const todos = [
    {
        id: 1,
        text: 'take out me',
        isCompleted: true
    },
    {
        id: 1,
        text: 'met today',
        isCompleted: true
    },
    {
        id: 1,
        text: 'urget',
        isCompleted: true
    }
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

/* For loop 
for(let n = 0; n <= 10; n++) {
    console.log(`nilo peligro: ${n}`);
}

/* while loop 
let i = 0;
while(i < 10) {
    console.log(`while loop numder ${i}`);
    i++;
}

/* todos within an array
const todos = [
    {
        id: 1,
        text: 'take out me',
        isCompleted: true
    },
    {
        id: 1,
        text: 'met today',
        isCompleted: true
    },
    {
        id: 1,
        text: 'urget',
        isCompleted: true
    }
];

for(let todo of todos) {
   console.log(todo);
    console.log(todo.isCompleted); 
}
/* forEach, map, filter 
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
})
console.log(todoCompleted);

/* conditionals 
const x = 5;

if(x == 20) {
    console.log('yes its 20');
}   else if(x < 20) {
    console.log('x is less than 20');
}
    else {
    console.log('not 20')
}
/* or i can do this 
const x = 4;
const y = 9;
if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}
if(x < 5 || y < 10) {
    console.log('x is less than 5 or y is less than 10');
}

/* ternary operator 
const x = 12;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

/* switches 
const x = 12;
const color = x > 10 ? 'red' : 'blue';
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

/*functions 
function addNums(num1 = 3, num2 = 3) {
    console.log(num1 +num2);
        /* or
    return num1 + num2;
}
/* over write the default nums above 
addNums(5,5);
    /*or 
console.log(addNums(5,5));

/* arrow function 
const addNums = (num1, num2) => console.log(num1 + num2);
addNums(5,5);
/* or 
const addNums = num1 => num1 + 5;
console.log(addNums(5));

/* object oriented programing */

// DOM
//single elements selector
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));
//muliple element selector
//console.log(document.querySelectorAll('.item'));
//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Nilo';
//ul.children[1].innerText = 'Peligro';
//ul.lastElementChild.innerHTML = '<h2>Ampo</h2>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'blue';

/*const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
}); */

//const btn = document.querySelector('.btn');
//btn.addEventListener('click', (e) => {
//    e.preventDefault();
//    document.querySelector('#my-form')
//    .style.background = 'green';
//    document.querySelector('body').classList.add('bg-dark');
//});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');const emailInput = document.querySelector('#email');const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        //clear fields
        nameInput.value ='';
        emailInput.value = '';
    }
}