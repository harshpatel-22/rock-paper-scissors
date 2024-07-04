const showcase = document.getElementById('showcase');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('userScore');
const compScore = document.getElementById('compScore')  ;
const startBtn = document.getElementById('startBtn');
const images = document.querySelectorAll('.img');
const instruction = document.getElementById('instruction');
const choices = document.getElementById('choices');

let computerWins = 0;
let userWins = 0;
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choice[choiceIndex];
}

function result(playerChoice, computerChoice) {
    choices.textContent = `Your choice: ${playerChoice} & Computer choice : ${computerChoice}`
    if (playerChoice == computerChoice) {
    
        showcase.innerHTML = `
            <div class="tie rr">Its a tie!!</div>
        `;
        
    }
    else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'rock')) {
      
        showcase.innerHTML = `
            <div class="win rr">You won &#x1F389;</div>
        `;
        userWins++;
    }
    else {
        showcase.innerHTML = `
            <div class="lose rr">You lose &#128577;</div>
        `;
        computerWins++;
    }
    userScore.textContent = userWins;
    compScore.textContent = computerWins;
}

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    // console.log("herafs");
    result(playerChoice, computerChoice);
}


startBtn.addEventListener('click', () => {
    instruction.style.display = 'block'
    images.forEach(img => {
      img.style.display = 'block';
    });
    startBtn.style.display = 'none'
})

rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));