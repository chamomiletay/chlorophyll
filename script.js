//Game Board
    // interactive image displays in middle of screen --> updates based on player input
    // on-screen keyboard accepts user input ✔
    // score and number of turns display on-screen ✔
    //correct letter responses will populate on screen into hidden message container ✔
    // incorrect letters should become disabled on keyboard once they are clicked once


//Player
    // can interact with keyboard (on-screen ✔ or external)
    // cannot click a letter more than once
    // cannot progress once turns left = 0 --> window.prompt("GAME OVER")


//Win Condition
    // player solves hidden message before number of turns is depleted
    // "restart puzzle" button appears once message is decoded

//Stretch Goals
    // power-up: player can gain a "life" that prevents them from taking "damage" upon incorrect responses
    // attach "how to play" link that links to set of instructions that player can access (or window prompt)



//create event listener --> push letters to div on button press
let letterKey = document.querySelectorAll('.btn-key');
let scoreTracker = document.querySelector('#score');
let turnsTracker = document.querySelector('#turns');
let score = 0;
let turns = 10;
let guessedLetter = false;

//Letters that appear in secret message
let secretMessageI = document.querySelector('.I');
let secretMessageL = document.querySelector('.L');
let secretMessageO = document.querySelector('.O');
let secretMessageOTwo = document.querySelector('.OTwo');
let secretMessageV = document.querySelector('.V');
let secretMessageE = document.querySelector('.E');
let secretMessageY = document.querySelector('.Y');
let secretMessageU = document.querySelector('.U');

scoreTracker.innerHTML = score;
turnsTracker.innerHTML = turns;

letterKey.forEach(key => key.addEventListener('click', (event) => {
    event.preventDefault()

    if(event.target.value === "Q"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "W"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "E"){
        secretMessageE.innerHTML = "E";
        score += 12.5;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "R"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "T"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "Y"){
        secretMessageY.innerHTML = "Y";
        score += 12.5;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "U"){
        secretMessageU.innerHTML = "U";
        score += 12.5;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "I"){
        secretMessageI.innerHTML = "I";
        score += 12.5;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "O"){
        secretMessageO.innerHTML = "O";
        secretMessageOTwo.innerHTML = "O";
        score += 25;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "P"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "A"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "S"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "D"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "F"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "G"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "H"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "J"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "K"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "L"){
        secretMessageL.innerHTML = "L";
        score += 12.5;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "Z"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "X"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "C"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "V"){
        secretMessageV.innerHTML = "V";
        score += 12.5;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "B"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "N"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "M"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 12.5;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    }

    if (guessedLetter === true){
        letterKey.disabled = true;
    }

    //Prompt user that they have run out of turns (also check if win condition is false)
    if (turns === -1) {
        turnsTracker.innerHTML = 0;
        window.prompt('GAME OVER')
    }
    // Button becomes disabled after being clicked once
    if (guessedLetter === true){
        event.target.setAttribute('disabled', 'disabled');
        event.target.setAttribute('class', 'disabledBtn');
    }

}))
