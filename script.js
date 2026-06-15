const resetgame = document.getElementById("reset");
const playerturn = document.getElementById("turn");
const cells = document.querySelectorAll('.cell');
const color = document.getElementById("main");
let isplaying = true;
let winningpattern = [[0,1,2], [3, 4, 5], [6, 7, 8], [1, 4, 7],[0,3,6] ,[2, 5, 8],[2, 4, 6]];
let player1turn = true;
let boardState = ["", "", "", "", "", "", "", "", ""];
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
            playerturn.innerText = "player 1";
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
        playerturn.innerText = `${symbol} Wins the Game!`;
        isplaying = false;
    }
}