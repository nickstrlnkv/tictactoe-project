(function() {

    function gameBoard() {
        const divGameBoard = document.querySelector(".gameboard");
        console.log(divGameBoard);
        return updateBoard(divGameBoard);
    }
    
    function checkGameOver(array) {
        // Check 1-3 rows
        if ((array[0][0] == "X" && array[0][1] == "X" && array[0][2] == "X")
        || (array[0][0] == "O" && array[0][1] == "O" && array[0][2] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
        else if ((array[1][0] == "X" && array[1][1] == "X" && array[1][2] == "X")
        || (array[1][0] == "O" && array[1][1] == "O" && array[1][2] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
        else if ((array[2][0] == "X" && array[2][1] == "X" && array[2][2] == "X")
        || (array[2][0] == "O" && array[2][1] == "O" && array[2][2] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
    
        // Check 1-3 columns
        if ((array[0][0] == "X" && array[1][0] == "X" && array[2][0] == "X")
        || (array[0][0] == "O" && array[1][0] == "O" && array[2][0] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
        else if ((array[0][1] == "X" && array[1][1] == "X" && array[2][2] == "X")
        || (array[0][1] == "O" && array[1][1] == "O" && array[2][1] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
        else if ((array[0][2] == "X" && array[1][2] == "X" && array[2][2] == "X")
        || (array[0][2] == "O" && array[1][2] == "O" && array[2][2] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
    
        // Check diagonals
        if ((array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X")
        || (array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
        else if ((array[0][2] == "X" && array[1][1] == "X" && array[2][0] == "X")
        || (array[0][2] == "O" && array[1][1] == "O" && array[2][0] == "O")) {
            return `Player ${array[0][0]} is won the game!`;
        }
    }
    
    function updateBoard(divGameBoard) {
        const divSquares = [...document.querySelectorAll(".number")];
        let turn = 0
        let arrayGameBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        divSquares.forEach((square) => {
            square.addEventListener('click', function() {
                if (turn % 2 == 0)  {
                    
                    // Create <img class="gameboard-image" src="../images/cross.svg">
                    const insertImg = document.createElement("img");
                    insertImg.src = "../images/cross.svg";
                    insertImg.classList.add("gameboard-image");
    
                    // Add to HTML
                    square.appendChild(insertImg);
                    console.log(`SQUARE ID IS ${square.id}, SQUARE CLASS IS ${square.classList.item(0)}`);
                    arrayGameBoard[square.id][square.classList.item(0)] = "X";
    
                    console.log(`square is added on ${square.id} ${square.classList.item(0)}`);
                    console.log(arrayGameBoard);
                    console.log(checkGameOver(arrayGameBoard));
                    turn++;
                }
                else {
                    // Create <img class="gameboard-image" src="../images/circle.svg">
                    const insertImg = document.createElement("img");
                    insertImg.src = "../images/circle.svg";
                    insertImg.classList.add("gameboard-image");
    
                    // Add to HTML
                    square.appendChild(insertImg);
                    console.log(`SQUARE ID IS ${square.id}, SQUARE CLASS IS ${square.classList.item(0)}`);
                    arrayGameBoard[square.id][square.classList.item(0)] = "O";
    
                    console.log(`square is added on ${square.id} ${square.classList.item(0)}`);
                    console.log(arrayGameBoard);
                    console.log(checkGameOver(arrayGameBoard));
                    turn++;
                }
            })
        })
    }
    
    gameBoard()
    
    }).call(this);