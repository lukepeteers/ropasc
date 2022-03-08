const score = document.querySelector('#score')
let userScore = 0;
let robotScore = 0;
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let computerWeapon;
    switch (randomNumber) {
        case 1:
            computerWeapon = 'ROCK';
            break;
        case 2:
            computerWeapon = 'PAPER';
            break;
        case 3:
            computerWeapon = 'SCISSORS';
            break;
    }
    return computerWeapon
};

function mainGame(playerSelection, computerSelection) {
    
    if (userScore == 5) {
            resultBox.textContent = "WE HAVE A WINNER. THE COMBATANT FROM THE HUMAN RACE"
    } else if (robotScore == 5) {
        resultBox.textContent = "THE ANDROIDS REIN VICTORIOUS"
    }else {
        if (playerSelection == computerSelection) {
            resultBox.textContent = "It's a draw"
        } else if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS') 
                    || (playerSelection == 'PAPER') && (computerSelection == 'ROCK')
                    || (playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')) {
                        resultBox.textContent = "You win"
                        ++userScore
                        score.textContent = `${userScore} - ${robotScore}`}
        else if ((playerSelection == 'ROCK') && !(computerSelection == 'SCISSORS') 
            || (playerSelection == 'PAPER') && !(computerSelection == 'ROCK')
            || (playerSelection == 'SCISSORS') && !(computerSelection == 'PAPER')) {
                resultBox.textContent = "You lose"
                ++robotScore
                score.textContent = `${userScore} - ${robotScore}`
        } else if (!!playerSelection == true) {
            resultBox.textContent = "You lose"
        } else {
            resultBox.textContent = "You lose"
        }
    }
}
        
// function toUpper() {
//     let userInput = prompt()
//     if (userInput == null) {
//         return null
//     } else {
//         return userInput.toUpperCase()
//     }
    
// }

// function game() {
//     for (let i = 0, robotScore = 0, userScore = 0; i == 0; i++) {
//         mainGame(toUpper(), computerPlay())
//         if (result == 'lose') {
//             robotScore++;
//             console.log('You lose the round')
//         } else if (result == 'win') {
//             userScore++;
//             console.log('You win the round')
//         } else if (result == 'draw') {
//             console.log("It's a draw")
//         }
//         console.log(`The score is USER: ${userScore} | AI: ${robotScore}`)
//         if (i >= 4 ) {
//             if (robotScore > userScore) {
//                 console.log("The machines are victorious")
//             } else if (robotScore < userScore) {
//                 console.log('The humans remain supreme')
//             } else if (robotScore == userScore) {
//                 console.log('After many casualties neither side is victorious')
//             }
//     }
    
//     }
// }


// game()


const rock = document.querySelector('#rock');
rock.addEventListener('click',() => mainGame("ROCK", computerPlay()));
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => mainGame("PAPER", computerPlay()));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => mainGame("SCISSORS", computerPlay()));
const resultBox = document.querySelector('#results')





