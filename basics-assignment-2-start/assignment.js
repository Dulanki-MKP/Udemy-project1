const task3Element = document.getElementById('task-3');

function greet(){
    alert('Welcome!');
}

function greetUser(name){
    alert(`Hello, ${name}`);
}

// greet();

greetUser('Ann');

task3Element.addEventListener('click', greet);

function threeParams(name1, name2, name3){
    return name1 + name2 + name3;
}

const str = threeParams('meet ', ' me ', ' there! ');
alert(str);