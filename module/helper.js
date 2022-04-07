/** Helper Functions */

import { GAME } from "./variables.js";

// select user on start game screen
export const selectProfile = () => {
    GAME.restartBtn.classList.add("hide");
    GAME.selectedProfile.forEach(img => {
        img.addEventListener("click", e => {
            let target = e.target.dataset.id;
            removeImgSelection(GAME.selectedProfile);
            document.querySelector(`[data-id=${target}]`).classList.add("selected");
            console.log(e.target.dataset.id);

            // set player turns
            GAME.turn = target == 'x' ? true : false;
        });
    });
}

// function to remove selected class
const removeImgSelection = (img) => {
    [].forEach.call(img, function (el) {
        el.classList.remove("selected");
    })
}

// function to set hover effect to the cell
export const setHoverEffect = () => {
    GAME.boardElement.classList.remove(GAME.O_PLAYER);
    GAME.boardElement.classList.remove(GAME.X_PLAYER);
    if (GAME.turn) {
        GAME.boardElement.classList.add(GAME.X_PLAYER);
    } else {
        GAME.boardElement.classList.add(GAME.O_PLAYER);
    }
}

// function to add current user in the cell
export const markCell = (cell, currentPlayer) => {
    cell.classList.add(currentPlayer);
}

// function to swap user turns
export const swapTurns = (turn) => {
    return turn = !turn;
}

// function to end the game
export const endGame = (draw, winEl, drawEl) => {
    if (!draw) {
        winEl.classList.add("show");
    } else {
        drawEl.classList.add("show");
    }
}

// function to check the draw result condition
export const isDraw = (flag) => {
    // if flag return zero, there is no winner (DRAW)
    if (flag.length) return;
    return [...GAME.cellElements].every(cell => {
        return cell.classList.contains(GAME.O_PLAYER) || cell.classList.contains(GAME.X_PLAYER);
    });
}