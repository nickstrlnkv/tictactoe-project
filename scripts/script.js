function gameBoard() {
    const divGameBoard = document.querySelector(".gameboard");
    console.log(divGameBoard);
    return updateBoard(divGameBoard);
}



function updateBoard(divGameBoard) {
    const divSquares = [...document.querySelectorAll(".number")];

    divSquares.forEach((square) => {
        square.addEventListener('click', function() {
            if (turn % 2 == 0)  {
                
                const insertImg = document.createElement("img");
                insertImg.src = "../images/cross.svg";
                insertImg.classList.add("gameboard-image");

                square.appendChild(insertImg);
                // console.log(`SQUARE ID IS ${square.id}, SQUARE CLASS IS ${square.classList.item(0)}`)
                arrayGameBoard[square.id][square.classList.item(0)] = "X";

                console.log(`square is added on ${square}`);
                console.log(arrayGameBoard);
                turn++;
            }
            else {
                const insertImg = document.createElement("img");
                insertImg.src = "../images/circle.svg";
                insertImg.classList.add("gameboard-image");

                square.appendChild(insertImg);
                arrayGameBoard[square.id][square.classList.item(0)] = "O";

                console.log(`square is added on ${square}`);
                console.log(arrayGameBoard);
                turn++;
            }
        })
    })
}
let turn = 0
let arrayGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

gameBoard()