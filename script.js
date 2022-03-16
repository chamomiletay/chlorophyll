//Game Board
    // interactive image displays in middle of screen ✔ --> updates based on player input
    // on-screen keyboard accepts user input ✔
    // score and number of turns display on-screen ✔
    //correct letter responses will populate on screen into hidden message container ✔
    // incorrect letters should become disabled on keyboard once they are clicked once ✔


//Player
    // can interact with keyboard (on-screen ✔ or external)
    // cannot click a letter more than once ✔
    // cannot progress once turns left = 0 --> window.alert("GAME OVER")


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
let turns = 20;
let guessedLetter = false;

//Letters that appear in secret message
let secretMessageD = document.querySelector('.D');

let secretMessageO = document.querySelector('.O');
let secretMessageOTwo = document.querySelector('.O-2');
let secretMessageOThree = document.querySelector('.O-3');
let secretMessageOFour = document.querySelector('.O-4');

let secretMessageN = document.querySelector('.N');

let secretMessageT = document.querySelector('.T');
let secretMessageTtwo = document.querySelector('.T-2');
let secretMessageTthree = document.querySelector('.T-3');
let secretMessageTfour = document.querySelector('.T-4');

let secretMessageF = document.querySelector('.F');
let secretMessageFtwo = document.querySelector('.F-2');

let secretMessageR = document.querySelector('.R');
let secretMessageRtwo = document.querySelector('.R-2');
let secretMessageRthree = document.querySelector('.R-3');

let secretMessageG = document.querySelector('.G');
let secretMessageW= document.querySelector('.W');
let secretMessageA = document.querySelector('.A');

let secretMessageE = document.querySelector('.E');
let secretMessageEtwo = document.querySelector('.E-2');
let secretMessageEthree = document.querySelector('.E-3');

let secretMessageY = document.querySelector('.Y');
let secretMessageU = document.querySelector('.U');
let secretMessageS = document.querySelector('.S');
let secretMessageL = document.querySelector('.L');

scoreTracker.innerHTML = score;
turnsTracker.innerHTML = turns;

letterKey.forEach(key => key.addEventListener('click', (event) => {
    event.preventDefault()

    if(event.target.value === "Q"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "W"){
        secretMessageW.innerHTML = "W";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "E"){
        secretMessageE.innerHTML = "E";
        secretMessageEtwo.innerHTML = "E";
        secretMessageEthree.innerHTML = "E";
        score += 12;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "R"){
        secretMessageR.innerHTML = "R";
        secretMessageRtwo.innerHTML = "R";
        secretMessageRthree.innerHTML = "R";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 12;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "T"){
        secretMessageT.innerHTML = "T";
        secretMessageTtwo.innerHTML = "T";
        secretMessageTthree.innerHTML = "T";
        secretMessageTfour.innerHTML = "T";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 16;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "Y"){
        secretMessageY.innerHTML = "Y";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "U"){
        secretMessageU.innerHTML = "U";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "I"){
        console.error('This letter is not in the hidden message. Womp womp.');
        score -= 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "O"){
        secretMessageO.innerHTML = "O";
        secretMessageOTwo.innerHTML = "O";
        secretMessageOThree.innerHTML = "O";
        secretMessageOFour.innerHTML = "O";
        score += 16;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "P"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "A"){
        secretMessageA.innerHTML = "A";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "S"){
        secretMessageS.innerHTML = "S";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "D"){
        secretMessageD.innerHTML = "D";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "F"){
        secretMessageF.innerHTML = "F";
        secretMessageFtwo.innerHTML = "F";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 8;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "G"){
        secretMessageG.innerHTML = "G";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "H"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "J"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "K"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "L"){
        secretMessageL.innerHTML = "L";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "Z"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "X"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "C"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "V"){
        console.error('This letter is not in the hidden message. Womp womp.');
        score -= 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
    } else if (event.target.value === "B"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "N"){
        secretMessageN.innerHTML = "N";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    } else if (event.target.value === "M"){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
    }

    //Prompt user that they have run out of turns (also check if win condition is false)
    

    if (turns === -1) {
        turnsTracker.innerHTML = 0;
        window.alert('GAME OVER')
        console.log(event)
    }
    // Button becomes disabled after being clicked once
    if (guessedLetter === true){
        event.target.setAttribute('disabled', 'disabled');
        event.target.setAttribute('class', 'disabledBtn');
    }

    // let keyboardBtn = document.getElementsByTagName('input');

    // if (guessedLetter === false && turns === -1){
    //     keyboardBtn.setAttribute('disabled', 'disabled');
    //     keyboardBtn.setAttribute('class', 'disabledBtn');
    // }
    
}))

