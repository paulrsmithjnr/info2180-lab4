window.onload = function() {
     var board = document.getElementById("board");
     var children = board.children;
     var flag = true;
     var gameState = ["", "", "", "", "", "", "", "", ""]

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
                child.classList.add("X")
                gameState[index] = "X"
                flag = false;
             } else if(flag == false) {
                child.innerHTML = "O";
                child.classList.add("O")
                gameState[index] = "O"
                flag = true;   
             } 

         }
         
     }

     function whenMouseIsOver(child) {
         child.classList.add("hover");
     }

     function whenMouseIsNotOver(child) {
        child.classList.remove("hover");
    }

     

};