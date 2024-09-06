const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const secondRandomNumber = Math.random();
if(((randomNumber && secondRandomNumber) > 0.7) || ((randomNumber || secondRandomNumber) < 0.2)){
    alert("Both are greater than 0.7 or at least one of the two is NOT greater than 0.2.");
}
// if(randomNumber > 0.7){
//     alert("the random number is greater than 0.7");
// } 
else {
    alert("both the random numbers are less than 0.7 at least one of the two is greater than 0.2.");
}

console.log("For loop");
let numbers = [1,3,5,7,9,11,13,15];
for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i]);
}


console.log("\n For-of loop");
for(const num of numbers){
    console.log(num);
}

console.log("\n While loop");
let count = 0;
while (count < numbers.length){
    console.log(numbers[count]);
    count++;
}

console.log("\n from the last ele in for loop");
for(let i = numbers.length - 1 ; i >= 0 ; i--){
    console.log(numbers[i]);
}
