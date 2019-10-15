window.onload = function() {
     var board = document.getElementById("board");
     var children = board.children;
     var flag = true;
     var gameState = ["", "", "", "", "", "", "", "", ""];

     for (let i = 0; i < children.length; i++){
         children[i].classList.add("square");
         children[i].onclick = function () {whenClicked(children[i], i)};
         children[i].onmouseover = function () {whenMouseIsOver(children[i])};
         children[i].onmouseout = function () {whenMouseIsNotOver(children[i])};
     }

     function whenClicked(child, index) {
         if(gameState[index] === "") {
             
             if(flag === true) {
                child.innerHTML = "X";
                child.classList.add("X");
                gameState[index] = "X";
                flag = false;
                if(checkWinnerX()) {
                    document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                    document.getElementById("status").classList.add("you-won");
                    for (let i = 0; i < children.length; i++){
                        children[i].onclick = function () {};
                    }
                }
             } else if(flag == false) {
                child.innerHTML = "O";
                child.classList.add("O");
                gameState[index] = "O";
                flag = true;   
                if(checkWinnerO()) {
                    document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                    document.getElementById("status").classList.add("you-won");
                    for (let i = 0; i < children.length; i++){
                        children[i].onclick = function () {};
                    }
                }
             } 

         }
         
     }

     function whenMouseIsOver(child) {
         child.classList.add("hover");
     }

     function whenMouseIsNotOver(child) {
        child.classList.remove("hover");
    }

    function checkWinnerX() {
        for (let i = 0; i < 3; i++){
            if (gameState[i] === "X" && gameState[i+3] === "X" && gameState[i+6] === "X") {
                return true;
            }
        }

        for (let i = 0; i < 7; i+=3) {
            if (gameState[i] === "X" && gameState[i+1] === "X" && gameState[i+2] === "X") {
                return true;
            }
        }

        if(gameState[0] === "X" && gameState[4] === "X" && gameState[8] === "X") {
            return true;
        } else if (gameState[2] === "X" && gameState[4] === "X" && gameState[6] === "X") {
            return true;
        }

        return false;

    }

    function checkWinnerO() {
        for (let i = 0; i < 3; i++){
            if (gameState[i] === "O" && gameState[i+3] === "O" && gameState[i+6] === "O") {
                return true;
            }
        }

        for (let i = 0; i < 7; i+=3) {
            if (gameState[i] === "O" && gameState[i+1] === "O" && gameState[i+2] === "O") {
                return true;
            }
        }

        if(gameState[0] === "O" && gameState[4] === "O" && gameState[8] === "O") {
            return true;
        } else if (gameState[2] === "O" && gameState[4] === "O" && gameState[6] === "O") {
            return true;
        }

        return false;
    }

     

};