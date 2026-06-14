const resetgame = document.getElementById("reset");
const playerturn = document.getElementById("turn");
const cells = document.querySelectorAll('.cell');
const color = document.getElementById("main");
isplaying = true;
let winmimgpattern = [[1,2,3] , [4, 5,6], [7,8,9] , [1,5,9],[3,5,7], [1,4,7] , [2,4,8],[3,6,9] ];
let player1turn = true;
let player2turn = false;
cells.forEach(addEventListener("click", game));   
function game(){
    if (player1turn == true) {
        resetgame.innerText = "X";
        player1turn = false;
        player2turn = true;
        playerturn.innerText = "Player 2"
        color.style.backgroundColor = "red";

    } else {
        resetgame.innerText = "O";
        player1turn = true;
        player2turn = false;
        playerturn.innerText = "Player 1"
        color.style.backgroundColor = "blue";
    };
};

