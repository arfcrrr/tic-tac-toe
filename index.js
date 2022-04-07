import{ GAME } from "./module/variables.js";
import { selectProfile, isDraw, endGame, setHoverEffect, markCell, swapTurns } from "./module/helper.js";
import { checkWinner, WIN_COMBINATIONS } from "./module/winner.js";

// Play background music
GAME.bgMusic.play();
GAME.bgMusic.loop = true;
GAME.bgMusic.volume = 0.4;

// Game Buttons
GAME.startBtn.addEventListener("click", startGame);
GAME.restartBtn.addEventListener("click", startGame);
GAME.playBtn.addEventListener("click", startGame);
GAME.drawBtn.addEventListener("click", startGame);

selectProfile()

// Start the Game
function startGame() {
    // stop winner and draw music
    GAME.winnerMusic.pause();
    GAME.winnerMusic.currentTime = 0;
    GAME.drawMusic.pause();
    GAME.drawMusic.currentTime = 0;

    // replay main background music
    GAME.bgMusic.play();
    GAME.restartBtn.classList.remove("hide");
    setHoverEffect();

    // iterate over cells and add click event
    GAME.cellElements.forEach(cell=> {
        cell.classList.remove(GAME.O_PLAYER);
        cell.classList.remove(GAME.X_PLAYER);
        cell.classList.remove("winner");
        cell.addEventListener('click', handleClick, {once: true})
    })
    GAME.startWindow.classList.add("hide");
    GAME.winEl.classList.remove("show");
    GAME.drawEl.classList.remove("show");
    GAME.winnerImg.children.length ? GAME.winnerImg.removeChild(GAME.winner) : null; 
}

// Onclick function handler
const handleClick = (e) => {
    const cell = e.target;
    const currentPlayer = GAME.turn ? GAME.X_PLAYER : GAME.O_PLAYER;
    markCell(cell, currentPlayer);

    // check winner
    let flag = checkWinner(currentPlayer, GAME.cellElements).filter((winner, index) => {
        if (winner) {
            // add background to the winner image
            WIN_COMBINATIONS[index].map(i => {
                GAME.cellElements[i].classList.add('winner');
            })
            // set the winner
            GAME.winner = GAME.cellElements[WIN_COMBINATIONS[index][0]].cloneNode(true);
            return winner !== false;
        }
    });

    // check winner or draw condition
    if (flag.length) {
        endGame(false, GAME.winEl, GAME.drawEl);
        GAME.winnerImg.append(GAME.winner);

        // stop background music and play music for winner
        GAME.bgMusic.pause();
        GAME.bgMusic.currentTime = 0;
        GAME.winnerMusic.play();
    } else if (isDraw(flag)){
        endGame(true, GAME.winEl, GAME.drawEl);

        // stop background music and play music for draw
        GAME.bgMusic.pause();
        GAME.bgMusic.currentTime = 0;
        GAME.drawMusic.play();
    }

    // swap turns
    GAME.turn = swapTurns(GAME.turn);
    setHoverEffect();
}