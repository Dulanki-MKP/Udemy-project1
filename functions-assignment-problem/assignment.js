const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (name, msg) => {
  console.log(name + ' ' + msg);
};

const sayHello3 = () => {
  console.log('Hi, John!');
};

const sayHello4 = name => 'Hello ' + name;

sayHello('John');
sayHello2('John', 'Good morning!');
sayHello3();
console.log(sayHello4('John'));
 

const sayHello5 = (name, msg = ' Thank you') => {
  console.log(name + ' ' + msg);
};

sayHello5('Doe');
sayHello5('Doe', 'Welcome');

function checkInput(cb, ...words){
  let emptyText = false;
  for(const word of words){
    if(!word){
      emptyText = true;
      break;
    }
  }
  if(!emptyText){
    cb();
  }
}

checkInput(()=> {
  console.log('no empty words.');
},'word1', 'word2', 'word3','word4');