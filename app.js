/*-------------------------------- Constants --------------------------------*/
let covidWins = unclickedSpaces < 1
const colors = {
    null: ,
    player1: 1,
    player2: -1,
}

let win1 = [sq1, sq2, sq3]
let win1 = [sq1, sq4, sq7]
let win1 = [sq1, sq5, sq9]
let win1 = [sq2, sq5, sq8]
let win1 = [sq3, sq6, sq9]
let win1 = [sq4, sq5, sq6]
let win1 = [sq7, sq8, sq9]
let win1 = [sq7, sq5, sq3]


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
const players = {
    player1: {
        name: 'Biden',
        gamesWon: null,
    },
    player2: {
        name: 'Trump',
        gamesWon: null,
    }
}

const board = {
    unclickedSpaces: 9,
    Player1Spaces: null,
    Player2Spaces: null,
}

const board = [[sq1, sq2, sq3],
                [sq4, sq5, sq6],
                [sq7, sq8, sq9 ]]



/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here


/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.body.addEventListener('click', (e) => {
    if(e.target.id === ){
        // change color/add message to box
        // if it's still empty and its the appropriate turn
    }
    // console.log(e.target.id) if you click button will log its id/file being called by event triggering the event listener
})

/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
function init() {
    this.play()
    this.render()
}



// On-Click function:
// Set up what happens when one of the elements
// is clicked

function onClick() {
    
}


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

function isWinner() {
    
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render() {
    
}