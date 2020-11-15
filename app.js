/*-------------------------------- Constants --------------------------------*/
// let noOneWins = unclickedSpaces < 1

const colors = {
    'null': null,
    '1': 'B',
    '-1': 'T',
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
    document.getElementById('winner-image').innerHTML = ''
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
            console.log(board)
            turn *= -1
            isWinner()
            console.log(`winner ${winner}`)
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
//         if(Math.abs(board[possibleWinScenarios[i][0]] + board[possibleWinScenarios[i][1]] + board[possibleWinScenarios[i][2]] === 3)){
//             return board[possibleWinScenarios[i][0]]
//         }
//     }
//     if(board.includes(null)){
//        return null
//     }
//     else{
//         return 'No One Wins'
//     }
// }

    // function isWinner() {
    //     for(let i = 0; i < possibleWinScenarios.length; i++){
    //         if(Math.abs(board[possibleWinScenarios[i][0]] + board[possibleWinScenarios[i][1]] + board[possibleWinScenarios[i][2]] === 3)){
    //             winner = board[possibleWinScenarios[i][0]]
    //             return winner
    //         }
    //     }
        // if(board.includes(null)){
        //    return null
        // }
        // else{
        //     return 'No One Wins'
        // }
    // }

function isWinner(){
    possibleWinScenarios.forEach(function (winningSet) {
        if(board[winningSet[0]] && board[winningSet[0]] === board[winningSet[1]] && board[winningSet[0]] === board[winningSet[2]]){
            winner = board[winningSet[0]]
        }
    })
    if(!board.includes(null) && winner === null){
        winner = 'No One Wins'
    }
    return winner
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render() {
    board.forEach(function (indSq, idx) {
        theBoard[idx].style.background = colors[indSq]
        theBoard[idx].innerHTML = colors[indSq]
    })
    if(winner === 'No One Wins'){
        document.getElementById('winner-image').innerHTML = "<img src='https://www.nhpr.org/sites/nhpr/files/styles/x_large/public/202010/CoronavirusBall_red_CDChighrez.png' width='300' height ='200'>"
        proclaimer.innerHTML = 'We All Lose, Covid Wins, Better Luck in 2021'
    }
    else if(winner){
        if(winner == 1){
            document.getElementById('winner-image').innerHTML = "<img src='https://deadline.com/wp-content/uploads/2019/10/shutterstock_editorial_10434333bm.jpg' width='300' height='200'>"
            proclaimer.innerHTML = `Whoop-dee-doo ${colors[winner].toUpperCase()} Wins!`
        }
    else{
        document.getElementById('winner-image').innerHTML = "<img src='https://media4.s-nbcnews.com/j/streams/2014/December/141208/1D274907376164-today-sad-biden-141208-tease.social_share_1024x512_center.jpg' width='300' height='200'>"
         proclaimer.innerHTML = `${colors[winner].toUpperCase()} Wins, Stop The Count!`
    }
}
    else{
        proclaimer.innerHTML = `${colors[turn].toUpperCase()}'s Turn`
    }
}