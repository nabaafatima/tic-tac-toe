const winModal = document.getElementById("winModal");
const winMessage = document.getElementById("winMessage");
const closeModal = document.getElementById("closeModal");
const resetgame = document.getElementById("reset");
const playerturn = document.getElementById("turn");
const cells = document.querySelectorAll('.cell');
const color = document.getElementById("main");
let isplaying = true;
let winningpattern = [[0,1,2], [3, 4, 5], [6, 7, 8], [1, 4, 7],[0,3,6] ,[2, 5, 8],[0, 4, 8],[2, 4, 6]];
let player1turn = true;
let boardState = ["", "", "", "", "", "", "", "", ""];
function resetTheGame() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.innerText = "";
    });
    isplaying = true;
    player1turn = true;
    playerturn.innerText = "Player 1(X)";
    color.style.backgroundColor = "#ff69b4";
}

cells.forEach((cell) =>{    
    cell.addEventListener("click", (e)=>{   
        if (e.target.innerText !== ""|| !isplaying) return;
        const cellIndex = parseInt(e.target.getAttribute("data-index"));
        let currentsymbol = "";
        if(player1turn===true) {                                
            color.style.backgroundColor = "red";
            e.target.innerText = "X";
            playerturn.innerText = "player 2(O)";
            currentsymbol = "X";
            player1turn = false;
        } else if(player1turn===false) {
            color.style.backgroundColor = "blue";
            e.target.innerText = "O";
            playerturn.innerText = "player 1(X)";
            currentsymbol = "O";
            player1turn = true;
        };
        boardState[cellIndex] = currentsymbol;
        checkwinner(currentsymbol); 
    })
});
function checkwinner(symbol) {
    const cellarray = Array.from(cells);
    const gamewon = winningpattern.some(pattern =>{
        return pattern.every(index=>{
            return boardState[index] === symbol;
        });
    });
    if (gamewon) {
        let winnerName = symbol === "X" ? "Player 1 (X)" : "Player 2 (O)";
        winMessage.innerHTML = `Woohoo! <br>${winnerName} totally crushed it!`;
        winModal.style.display = "flex";
        isplaying = false;
    }
}
resetgame.addEventListener("click", resetTheGame);
closeModal.addEventListener("click", () => {
    winModal.style.display = "none";
    resetTheGame();
});