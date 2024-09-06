const startGameBtn = document.getElementById('start-game-btn');

// function startGame(){
//     console.log('Game is starting...');
// }

// const person = {
//     name: 'Max',
//     greet: function greet(){
//         console.log('Hello there!');
//     }
// };

// person.greet();

// console.log("type of startGame : " + typeof startGame);

// console.dir(startGame);

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSOR
    ) {
        alert(`Invalid choice!, We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};



startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});
