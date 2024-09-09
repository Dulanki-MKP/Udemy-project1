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
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSOR
    ) {
        alert(`Invalid choice!, We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if (randomValue < 0.67){
        return PAPER;
    }
    else {
        return SCISSOR;
    }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
     cChoice === pChoice ? RESULT_DRAW : 
    (cChoice === ROCK && pChoice === PAPER || 
    cChoice === PAPER && pChoice === SCISSOR ||
    cChoice === SCISSOR && pChoice == ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;

    // if (cChoice === pChoice){
    //     return RESULT_DRAW;
    // }
    // else if (
    // cChoice === ROCK && pChoice === PAPER || 
    // cChoice === PAPER && pChoice === SCISSOR ||
    // cChoice === SCISSOR && pChoice == ROCK){
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // } 
   

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice){
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
    let message = `You Picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if(winner === RESULT_DRAW){
        message = message + `had a draw.`;
    } else if(winner === RESULT_PLAYER_WINS){
        message = message + `won.`;
    } else {
        message = message + `lost.`;
    }
    alert(message);
    gameIsRunning = false;
});
