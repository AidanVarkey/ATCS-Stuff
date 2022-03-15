const arr = ['string', 2, 3, 4, 5];
arr[6] = 'string2';
arr.push('white');
arr.shift();
console.log(arr);

let animal = 'dog';

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    pets: [animal, 'cats'],
    address: {
        street: '123 Street',
        city: 'Houston',
        state: 'Texas'
    }
}

console.log(person);


// var message = document.getElementById( "Button" );
// message.addEventListener( "click", output, true );
// function output() {
//     console.log(message.value );
//   }

//FUNCTIONS------------------------------------------------------
function hello(name){
    console.log('Hello ' + name);
}


const convertPercent = num => num / 100;
console.log(convertPercent(50));

const people = [
    {
        firstName: 'John',
        lastName: 'Smith',
        age: 30,
    },
    {
        firstName: 'Mary',
        lastName: 'Smith',
        age: 28,
    }
]

// people.forEach(function(person){
//     console.log(person.age);
// });

// const personName = people.map(person => person.firstName);
// console.log(personName);

const peopleAgeUnder30 = people.filter(person => person.age < 30);
console.log(peopleAgeUnder30);

//CONDITIONALS-----------------------
let animal2 = 'cat';
const likesCats = animal2 === 'cat' ? true : false;
console.log(likesCats);

const list = document.querySelector('#list');
console.log(list);

let i = 0;


const btnAdd = document.getElementById('myAddButton');

btnAdd.addEventListener('mouseover', function(e){
    myAddButton.style.color='red';
});
btnAdd.addEventListener('mouseout', function(e){
    myAddButton.style.color='black';
});

btnAdd.addEventListener('click', function(e){
    list.lastElementChild.style.color ='green';
    i++;
    list.lastElementChild.textContent='hello ' + i;

    list.firstElementChild.textContent="Alternate Text";
    const child = list.getElementsByTagName('li')[0];
    
    const newLi = document.createElement("li");
    newLi.innerHTML="hi";
    list.append(newLi);
});

const btnRemove = document.getElementById('myRemoveButton');
btnRemove.addEventListener('click', function(e){
    const child = list.getElementsByTagName('li')[1];
    child.remove();
});

const btnRandom = document.getElementById('Button');
btnRandom.addEventListener('click', function(e){
    window.open("https://www.google.com/search?q=franco%27s+pizza+montvale&rlz=1C5GCEM_enUS949US949&oq=franco&aqs=chrome.2.69i57j46i433i512j69i59j0i433i512j0i131i433i512j69i60l3.5160j0j7&sourceid=chrome&ie=UTF-8&safe=active&ssui=on", "_blank");
});

//Three Boxes
const grandparent = document.getElementById('grandparent');
grandparent.addEventListener('click', function(e){
    grandparent.style.width = grandparent.getBoundingClientRect().width+1+'px';
    grandparent.style.height = grandparent.getBoundingClientRect().height+1+'px';
});

const parent = document.getElementById('parent');
parent.addEventListener('click', function(e){
    parent.style.width = parent.getBoundingClientRect().width+1+'px';
    parent.style.height = parent.getBoundingClientRect().height+1+'px';
});

const child = document.getElementById('child');
child.addEventListener('click', function(e){
    child.style.width = child.getBoundingClientRect().width+1+'px';
    child.style.height = child.getBoundingClientRect().height+1+'px';
});


//to do list stuff
const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const taskList = document.querySelector('.task-list');
const taskTemplate = document.querySelector('#task-template');
let id = 1;

newTask.addEventListener('keyup', (e) => {
    if(e.keyCode === 13 && inputValid()){
        addTask();
    }
});

addTaskBtn.addEventListener('click', () => {
    if(inputValid()){
        addTask();
    }
});

removeCompleteBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        const checked = task.querySelector('input').checked;
        if(checked){
            task.remove();
        }
    })
});

function addTask() {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = id;
    const label = taskElement.querySelector('label');
    label.htmlFor = id;
    label.append(newTask.value);
    taskList.appendChild(taskElement);
    newTask.value = ' ';
    id++;
    console.log("task added");
}

function inputValid(){
    return newTask.value !== ' ';
}