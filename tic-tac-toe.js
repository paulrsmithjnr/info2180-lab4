window.onload = function() {
     var board = document.getElementById("board");
     var children = board.children;

     for (let i = 0; i < children.length; i++){
         children[i].classList.add("square");
     }
};