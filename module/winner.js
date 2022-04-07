/** Winning combinations of Tic-Tac-Toe game */

export const WIN_COMBINATIONS = [
    [0, 1, 2], // horizontal pattern
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical pattern
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal pattern
    [2, 4, 6]
]

// function to check the winner
export const checkWinner = (currentPlayer, cellElements) => {
    let winMatch = [];
    WIN_COMBINATIONS.some(combination => {
        winMatch.push(combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        }));
    })
    return winMatch || null;
}