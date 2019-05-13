let puzzleEasy = sudoku.generate("easy"); 
let puzzleMedium = sudoku.generate("medium"); 
let puzzleHard = sudoku.generate("hard");

const tiles = document.querySelectorAll(".tile");

//CHANGE pass in puzzle type variable as argument
function tileContent (){
    tiles.forEach(tile => {
        //TEMP changes cell content to match game key
        //need to change this to only show a portion of these and make those tile contents
        //hide input & pencil & pencil toggle and instead display value in <span>
        if(puzzleEasy[tile.id] != undefined){
            tile.textContent = puzzleEasy[tile.id];
        };
    });
};
//each tile needs following content:
    //pencil toggle
    //pencil grid
    //input for number limited to 1-9
    //<span> that will be filled with game's value IF chosen as a shown one
//when pencil grid added, want toggle bar to toggle display status of both 
//pencil grid and number input (will have to go to parent node & then down OR make id related)