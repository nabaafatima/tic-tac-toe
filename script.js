const resetgame = document.getElementById("reset");
const playerturn = document.getElementById("turn");
const cells = document.querySelectorAll('.cell');
const color = document.getElementById("main");
isplaying = true;
let winmimgpattern = [[1,2,3] , [4, 5,6], [7,8,9] , [1,5,9],[3,5,7], [1,4,7] , [2,4,8],[3,6,9] ];
let player1turn = true;
cells.forEach((cell) =>{
    
    cell.addEventListener("click", (e)=>{   
        if (e.target.innerText !== "") return;
        if(player1turn===true) {                                
            color.style.backgroundColor = "red";
            e.target.innerText = "X";
            playerturn.innerText = "player 2";
            player1turn = false;
        } else if(player1turn===false) {
            color.style.backgroundColor = "blue";
            e.target.innerText = "O";
            playerturn.innerText = "player 1";
            player1turn = true;
        };
    })
});
