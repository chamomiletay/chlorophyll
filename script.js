//Game Board
    // interactive image displays in middle of screen --> updates based on player input
    // on-screen keyboard accepts user input
    // score and number of turns display on-screen
    //correct letter responses will populate on screen into hidden message container
    // incorrect letters should become disabled on keyboard once they are clicked once


//Player
    // can interact with keyboard (on-screen or external)
    // cannot click a letter more than once
    // 


//Win Condition
    // player solves hidden message before number of turns is depleted
    // "restart puzzle" button appears once message is decoded

//Stretch Goals
    // power-up: player can gain a "life" that prevents them from taking "damage" upon incorrect responses
    // attach "how to play" link that links to set of instructions that player can access (or window prompt)

//create event listener --> push letters to div on button press
let secretMessage = document.querySelector('.secret-letter');
let letterKey = document.querySelectorAll('.btn-key')

letterKey.forEach(key => key.addEventListener('click', (event) => {
    event.preventDefault()

    if(event.target.value === "Q"){
        secretMessage.innerHTML = "Q";
    } else if (event.target.value === "W"){
        secretMessage.innerHTML = "W";
    } else if (event.target.value === "E"){
        secretMessage.innerHTML = "E";
    } else if (event.target.value === "R"){
        secretMessage.innerHTML = "R";
    } else if (event.target.value === "T"){
        secretMessage.innerHTML = "T";
    } else if (event.target.value === "Y"){
        secretMessage.innerHTML = "Y";
    } else if (event.target.value === "U"){
        secretMessage.innerHTML = "U";
    } else if (event.target.value === "I"){
        secretMessage.innerHTML = "I";
    } else if (event.target.value === "O"){
        secretMessage.innerHTML = "O";
    } else if (event.target.value === "P"){
        secretMessage.innerHTML = "P";
    } else if (event.target.value === "A"){
        secretMessage.innerHTML = "A";
    } else if (event.target.value === "S"){
        secretMessage.innerHTML = "S";
    } else if (event.target.value === "D"){
        secretMessage.innerHTML = "D";
    } else if (event.target.value === "F"){
        secretMessage.innerHTML = "F";
    } else if (event.target.value === "G"){
        secretMessage.innerHTML = "G";
    } else if (event.target.value === "H"){
        secretMessage.innerHTML = "H";
    } else if (event.target.value === "J"){
        secretMessage.innerHTML = "J";
    } else if (event.target.value === "K"){
        secretMessage.innerHTML = "K";
    } else if (event.target.value === "L"){
        secretMessage.innerHTML = "L";
    } else if (event.target.value === "Z"){
        secretMessage.innerHTML = "Z";
    } else if (event.target.value === "X"){
        secretMessage.innerHTML = "X";
    } else if (event.target.value === "C"){
        secretMessage.innerHTML = "C";
    } else if (event.target.value === "V"){
        secretMessage.innerHTML = "V";
    } else if (event.target.value === "B"){
        secretMessage.innerHTML = "B";
    } else if (event.target.value === "N"){
        secretMessage.innerHTML = "N";
    } else if (event.target.value === "M"){
        secretMessage.innerHTML = "M";
    }
}))
