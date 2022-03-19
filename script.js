//Game Board
    // interactive image displays in middle of screen ✔ --> updates based on player input
    // on-screen keyboard accepts user input ✔
    // score and number of turns display on-screen ✔
    //correct letter responses will populate on screen into hidden message container ✔
    // incorrect letters should become disabled on keyboard once they are clicked once ✔


//Player
    // can interact with keyboard (on-screen ✔ or external)
    // cannot click a letter more than once ✔
    // cannot progress once turns left = 0 --> window.alert("GAME OVER")✔


//Win Condition
    // player solves hidden message before number of turns is depleted ✔
    // "restart puzzle" button appears once message is decoded

//Stretch Goals
    // power-up: player can gain a "life" that prevents them from taking "damage" upon incorrect responses
    // attach "how to play" link that links to set of instructions that player can access (or window prompt)


//VARIABLES
//create event listener --> push letters to div on button press
let letterKey = document.querySelectorAll('.btn-key');
let scoreTracker = document.querySelector('#score');
let turnsTracker = document.querySelector('#turns');
let resetBtn = document.querySelector('#reset-btn');
let submitBtn = document.querySelector('#submit');
let input = document.querySelector('#player-input');

let score = 0;
let turns = 20;
let guessedLetter = false;
let numCorrect = 0;
let correctLetter = null;

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

//Keep track of player's progress
scoreTracker.innerHTML = score;
turnsTracker.innerHTML = turns;


//Event listener --> listen for click on keyboard displayed on screen
letterKey.forEach(key => key.addEventListener('click', (event) => {
    event.preventDefault()

    if(event.target.value === "Q"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;

    } else if (event.target.value === "W"){
        secretMessageW.innerHTML = "W";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;

    } else if (event.target.value === "E"){
        secretMessageE.innerHTML = "E";
        secretMessageEtwo.innerHTML = "E";
        secretMessageEthree.innerHTML = "E";
        score += 12;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 3;
        correctLetter = true;
        
    } else if (event.target.value === "R"){
        secretMessageR.innerHTML = "R";
        secretMessageRtwo.innerHTML = "R";
        secretMessageRthree.innerHTML = "R";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 12;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 3;
        correctLetter = true;
        
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
        numCorrect += 4;
        correctLetter = true;
        
    } else if (event.target.value === "Y"){
        secretMessageY.innerHTML = "Y";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "U"){
        secretMessageU.innerHTML = "U";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "I"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        score -= 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        correctLetter = false;
        
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
        numCorrect += 4;
        correctLetter = true;
        
    } else if (event.target.value === "P"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "A"){
        secretMessageA.innerHTML = "A";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "S"){
        secretMessageS.innerHTML = "S";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "D"){
        secretMessageD.innerHTML = "D";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "F"){
        secretMessageF.innerHTML = "F";
        secretMessageFtwo.innerHTML = "F";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 8;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 2;
        correctLetter = true;
        
    } else if (event.target.value === "G"){
        secretMessageG.innerHTML = "G";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "H"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "J"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "K"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "L"){
        secretMessageL.innerHTML = "L";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "Z"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "X"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "C"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "V"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        score -= 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "B"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    } else if (event.target.value === "N"){
        secretMessageN.innerHTML = "N";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
        
    } else if (event.target.value === "M"){
        console.error(`"${event.target.value}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
        
    }

    //score should not display number lower than zero
    if (score < 0) {
        scoreTracker.innerHTML = '0';
    }

    if (turns < 0){
        turnsTracker.innerHTML = '0';
    }

    //Prompt user that they have run out of turns (also check if win condition is false)
    //WIN CONDITION
    if (turns === -1 && numCorrect !== 25) {
        turnsTracker.innerHTML = 0;
        window.alert('GAME OVER')
        console.log(event)
        disable();
        input.setAttribute('disabled', 'disabled');
        
    } else if (numCorrect === 25) {
        window.alert(`CONGRATULATIONS! YOU'VE DECODED THE HIDDEN MESSAGE!`)
        disable();
        input.setAttribute('disabled', 'disabled');
    }
    // Button becomes disabled after being clicked once
    if (guessedLetter === true && correctLetter === false){
        event.target.setAttribute('disabled', 'disabled');
        event.target.setAttribute('class', 'disabledBtnFalse');
    } else if (guessedLetter === true && correctLetter === true){
        event.target.setAttribute('disabled', 'disabled');
        event.target.setAttribute('class', 'disabledBtnTrue');
    }

    let keyboardBtn = document.querySelectorAll('.btn-key')
    
    if (guessedLetter === false && turns === -1){
        keyboardBtn.setAttribute('disabled', 'disabled');
        keyboardBtn.setAttribute('class', 'disabledBtn');
}   


//WATER YOUR PLANT !!
let img = document.querySelector('.plant');

if (score > 8 && score < 24){
    img.src = 'frame1.gif';
} else if (score > 24 && score < 40){
    img.src = 'frame2.gif';
} else if (score > 40 && score < 56){
    img.src = 'frame3.gif'
} else if (score > 56 && score < 80){
    img.src = 'frame4.gif'
} else if (score > 90 && score < 100){
    img.src = 'frame5.gif'
}

}))


//EXTERNAL KEYBOARD EVENT LISTENER
input.addEventListener('keydown', (event) => {
    // event.preventDefault();

    if(event.key === 'q'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'w'){
        secretMessageW.innerHTML = "W";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'e'){
        secretMessageE.innerHTML = "E";
        secretMessageEtwo.innerHTML = "E";
        secretMessageEthree.innerHTML = "E";
        score += 12;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 3;
        correctLetter = true;
    } else if (event.key === 'r'){
        secretMessageR.innerHTML = "R";
        secretMessageRtwo.innerHTML = "R";
        secretMessageRthree.innerHTML = "R";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 12;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 3;
        correctLetter = true;
    } else if (event.key === 't'){
        secretMessageT.innerHTML = "T";
        secretMessageTtwo.innerHTML = "T";
        secretMessageTthree.innerHTML = "T";
        secretMessageTfour.innerHTML = "T";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 16;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 4;
        correctLetter = true;
    } else if (event.key === 'y'){
        secretMessageY.innerHTML = "Y";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'u'){
        secretMessageU.innerHTML = "U";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'i'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        score -= 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'o'){
        secretMessageO.innerHTML = "O";
        secretMessageOTwo.innerHTML = "O";
        secretMessageOThree.innerHTML = "O";
        secretMessageOFour.innerHTML = "O";
        score += 16;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 4;
        correctLetter = true;
    } else if (event.key === 'p'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'a'){
        secretMessageA.innerHTML = "A";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 's'){
        secretMessageS.innerHTML = "S";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'd'){
        secretMessageD.innerHTML = "D";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'f'){
        secretMessageF.innerHTML = "F";
        secretMessageFtwo.innerHTML = "F";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 8;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 2;
        correctLetter = true;
    } else if (event.key === 'g'){
        secretMessageG.innerHTML = "G";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'h'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'j'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'k'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'l'){
        secretMessageL.innerHTML = "L";
        score += 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'z'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'x'){
        console.error('This letter is not in the hidden message. Womp womp.');
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'c'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'v'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        score -= 4;
        scoreTracker.innerHTML = score;
        turns -= 1;
        turnsTracker.innerHTML = turns
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'b'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    } else if (event.key === 'n'){
        secretMessageN.innerHTML = "N";
        turns -= 1;
        turnsTracker.innerHTML = turns
        score += 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        numCorrect += 1;
        correctLetter = true;
    } else if (event.key === 'm'){
        console.error(`"${event.key}" does not appear in the puzzle ):`);
        turns -= 1;
        turnsTracker.innerHTML = turns
        score -= 4;
        scoreTracker.innerHTML = score;
        guessedLetter = true;
        correctLetter = false;
    }


    //WATER YOUR PLANT !!
    let img = document.querySelector('.plant');

    if (score > 8 && score < 24){
        img.src = 'frame1.gif';
    } else if (score > 24 && score < 40){
        img.src = 'frame2.gif';
    } else if (score > 40 && score < 56){
        img.src = 'frame3.gif'
    } else if (score > 56 && score < 80){
        img.src = 'frame4.gif'
    } else if (score > 90 && score < 100){
        img.src = 'frame5.gif'
    }

    //score should not display less than '0'
    if (score < 0) {
        scoreTracker.innerHTML = '0';
    }

    if (turns < 0){
        turnsTracker.innerHTML = '0';
    }

    //WIN CONDITION
    if (turns === -1 && numCorrect !== 25) {
        turnsTracker.innerHTML = 0;
        window.alert('GAME OVER')
        console.log(event)
        disable();
        
    } else if (numCorrect === 25) {
        window.alert(`CONGRATULATIONS! YOU'VE DECODED THE HIDDEN MESSAGE!`)
        disable();
    }


})

//Create function to disable each button once win condition is met
let btnCorrect = document.querySelector('.disabledBtnTrue');

function disable() {
for (let i = 0; i < letterKey.length; i++) {
    letterKey[i].setAttribute('disabled', 'disabled');
    letterKey[i].setAttribute('class', 'disabledBtn');
    }

    // btnCorrect.setAttribute('class', 'disabledBtn');
}

