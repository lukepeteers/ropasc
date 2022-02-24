let result;

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
    if (playerSelection == computerSelection) {
        console.log(playerSelection, computerSelection)
        return result = 'draw'
    } else if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS') 
                || (playerSelection == 'PAPER') && (computerSelection == 'ROCK')
                || (playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')) {
                    console.log(playerSelection, computerSelection)
                    return result = 'win' }
    else if ((playerSelection == 'ROCK') && !(computerSelection == 'SCISSORS') 
    || (playerSelection == 'PAPER') && !(computerSelection == 'ROCK')
    || (playerSelection == 'SCISSORS') && !(computerSelection == 'PAPER')){
        console.log(playerSelection, computerSelection)
        return result = 'lose'
    } else if (!!playerSelection == true) {
        console.log(`${playerSelection} is not an option`)
        return result = 'lose'
    } else {
        console.log('Coward')
        return result = 'lose'
    }}
       
function toUpper() {
    let userInput = prompt()
    if (userInput == null) {
        return null
    } else {
        return userInput.toUpperCase()
    }
    
}

function game() {
    for (let i = 0, robotScore = 0, userScore = 0; i < 5; i++) {
        mainGame(toUpper(), computerPlay())
       
        if (result == 'lose') {
            robotScore++;
            console.log('You lose the round')
        } else if (result == 'win') {
            userScore++;
            console.log('You win the round')
        } else if (result == 'draw') {
            console.log("It's a draw")
        }
        console.log(`The score is USER: ${userScore} | AI: ${robotScore}`)
        if (i >= 4 ) {
            if (robotScore > userScore) {
                console.log("The machines are victorious")
            } else if (robotScore < userScore) {
                console.log('The humans remain supreme')
            } else if (robotScore == userScore) {
                console.log('After many casualties neither side is victorious')
            }
    }
    
    }
}


game()





