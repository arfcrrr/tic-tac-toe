/** All the varaiables needed*/

export let GAME = {
    O_PLAYER: 'o', // value for player o
    X_PLAYER: 'x', // value for player x
    turn: undefined,
    winner: null,
    selectedProfile: document.querySelectorAll(".img .character"),
    cellElements: document.querySelectorAll('[data-cell]'),
    boardElement: document.getElementById("board"),
    startBtn: document.getElementById("btn-start"),
    restartBtn: document.getElementById("btn-restart"),
    playBtn: document.getElementById("btn-play"),
    drawBtn: document.getElementById("btn-draw"),
    startWindow: document.querySelector(".start-game"),
    winEl: document.querySelector(".winner-msg"),
    drawEl: document.querySelector(".draw-msg"),
    winnerImg: document.querySelector(".winner-msg .winner"),
    bgMusic: new Audio('assets/audio/backgroundmusic.mp3'),
    winnerMusic: document.getElementById("winnerMusic"),
    drawMusic: document.getElementById("drawMusic")
}