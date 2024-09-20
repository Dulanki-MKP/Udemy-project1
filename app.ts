const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button'); 

function add(a: number, b: number) {
    return a + b;
}

function printReult(result) {
    console.log(result);
}

// const result = add(5,3);
// let isDone = false;

// printReult(result);

buttonElement?.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1 , num2);
    printReult(result);
})
