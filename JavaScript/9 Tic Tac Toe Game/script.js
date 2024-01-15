const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const btn = document.querySelector(".btn");
const celebrationImg1 = document.querySelector(".img1");
const celebrationImg2 = document.querySelector(".img2");
const sadImg1 = document.querySelector(".img3");
const sadImg2 = document.querySelector(".img4");

let currentPlayer;
let gameGrid;
const winPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// function which intilaise the game
function initGame(){
    currentPlayer = 'X';
    gameGrid = ["","","",
                "","","",
                "","",""];

    boxes.forEach((box,index) => {
        box.innerHTML = "";
        boxes[index].style.pointerEvents = "all";
        boxes[index].classList = `box box${index+1}`;
    });
    btn.classList.remove('active');
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
    celebrationImg1.classList.remove('imgActive');
    celebrationImg2.classList.remove('imgActive');
    sadImg1.classList.remove('imgActive');
    sadImg2.classList.remove('imgActive');

}

initGame();

function swapTurns(){
    if(currentPlayer === 'X')
    currentPlayer = 'O';
    else 
    currentPlayer = 'X';
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
}

function handleClick(index){

    // if curr clicked box is empty then only proceed
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swap turns of player
        swapTurns();
        // check game is over or not
        checkGameOver();
    }
}

boxes.forEach((box,index) => {
    box.addEventListener('click' , () => {
        handleClick(index);
    })
});

function checkGameOver(){
    let answer = "";
    
    winPos.forEach((pos) => {
        // any one win pos filled with X/O
        if((gameGrid[pos[0]] === 'O' && gameGrid[pos[1]] === 'O' && gameGrid[pos[2]] === 'O') 
            || (gameGrid[pos[0]] === 'X' && gameGrid[pos[1]] === 'X' && gameGrid[pos[2]] === 'X')){
                // store ans
                answer = gameGrid[pos[0]];

                // stop pointer events for each box
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                });
                
                // add win class to pos
                boxes[pos[0]].classList.add('win');
                boxes[pos[1]].classList.add('win');
                boxes[pos[2]].classList.add('win');
        };
    });

    // winnner found
    if(answer !== ""){
        btn.classList.add('active');
        celebrationImg1.classList.add('imgActive');
        celebrationImg2.classList.add('imgActive');
        gameInfo.innerText = `Winner Player - ${answer}`;
        return ;
    }
    
    // winnner not found
    let count = 0;
    gameGrid.forEach((box) => {
        if(box !== "")
        count++;
    })

    if(count === 9){
        btn.classList.add('active');
        gameInfo.innerText = `Game Tied !`;
        sadImg1.classList.add('imgActive');
        sadImg2.classList.add('imgActive');
        boxes.forEach((box) => {
            box.classList.add('lose');
        })
        return ;
    }

}

btn.addEventListener('click', initGame);