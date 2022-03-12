//Game Board
    // interactive image displays in middle of screen --> updates based on player input
    // on-screen keyboard accepts user input ✔
    // score and number of turns display on-screen
    //correct letter responses will populate on screen into hidden message container ✔
    // incorrect letters should become disabled on keyboard once they are clicked once


//Player
    // can interact with keyboard (on-screen ✔ or external)
    // cannot click a letter more than once
    // 


//Win Condition
    // player solves hidden message before number of turns is depleted
    // "restart puzzle" button appears once message is decoded

//Stretch Goals
    // power-up: player can gain a "life" that prevents them from taking "damage" upon incorrect responses
    // attach "how to play" link that links to set of instructions that player can access (or window prompt)



//create event listener --> push letters to div on button press
let letterKey = document.querySelectorAll('.btn-key');
let scoreTracker = document.querySelector('#score');
let score = 0;

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

letterKey.forEach(key => key.addEventListener('click', (event) => {
    event.preventDefault()

    if(event.target.value === "Q"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "W"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "E"){
        secretMessageE.innerHTML = "E";
        score += 12.5;
        scoreTracker.innerHTML = score;
    } else if (event.target.value === "R"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "T"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "Y"){
        secretMessageY.innerHTML = "Y";
        score += 12.5;
        scoreTracker.innerHTML = score;
    } else if (event.target.value === "U"){
        secretMessageU.innerHTML = "U";
        score += 12.5;
        scoreTracker.innerHTML = score;
    } else if (event.target.value === "I"){
        secretMessageI.innerHTML = "I";
        score += 12.5;
        scoreTracker.innerHTML = score;
    } else if (event.target.value === "O"){
        secretMessageO.innerHTML = "O";
        secretMessageOTwo.innerHTML = "O";
        score += 25;
        scoreTracker.innerHTML = score;
    } else if (event.target.value === "P"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "A"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "S"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "D"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "F"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "G"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "H"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "J"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "K"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "L"){
        secretMessageL.innerHTML = "L";
        score += 12.5;
        scoreTracker.innerHTML = score;
    } else if (event.target.value === "Z"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "X"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "C"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "V"){
        secretMessageV.innerHTML = "V";
        score += 12.5;
        scoreTracker.innerHTML = score;
    } else if (event.target.value === "B"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "N"){
        console.log('This letter is not in the hidden message. Womp womp.');
    } else if (event.target.value === "M"){
        console.log('This letter is not in the hidden message. Womp womp.');
    }
}))
