/*-------------------------------- Constants --------------------------------*/
// let noOneWins = unclickedSpaces < 1

const colors = {
    'null': null,
    '1': 'blue',
    '-1': 'red',
    '1': 'Biden',
    '-1': 'Trump'
}

// make 1 and -1 an object, and have key value pairs of color, and name

const possibleWinScenarios = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[3, 4, 5],
[6, 7, 8],
[6, 4, 2]
]


/*---------------------------- Variables (state) ----------------------------*/


// Variables might include (board/turn/winner)

let turn, winner, board



/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here


const theBoard = document.querySelectorAll('.board div')

const proclaimer = document.querySelector('#message')


/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.querySelector('.board').addEventListener('click', onClick)
document.querySelector('#button').addEventListener('click', init)
document.querySelector('#music-button').addEventListener('click', function (e) {
    let moodMusic = document.getElementById('mood-music')
    moodMusic.play()
})


    // console.log(e.target.id) if you click button will log its id/file being called by event triggering the event listener
/*-------------------------------- Functions --------------------------------*/
init()

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
function init() {
    board = [null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()
}


// On-Click function:
// Set up what happens when one of the elements
// is clicked

function onClick(e) {
for (let i = 0; i < board.length+1; i++) {
    if(Number(e.target.id) === i){
        if(board[i] || winner){
            return
        }
        else{
            board[Number(e.target.id)] = turn
            turn *= -1
            winner = isWinner()
            render()
        }
    }
}
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

// function isWinner() {
//     for(let i = 0; i < possibleWinScenarios.length; i++){
//         let singleCombo = possibleWinScenarios[i]
//         if(singleCombo.every(function (num) {
//             if(board.includes(num)){
//                 return true
//             }
//         }
//         return board[possibleWinScenarios[i]]
