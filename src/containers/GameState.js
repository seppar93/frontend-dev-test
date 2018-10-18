import { addMove, restGame } from "src/store/actions/index.js";
import TicTactToe from "src/containers/TicTacToe.js";
import { connect } from "react-redux";

const getWinner = cells => {
  const winningSates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  let winner = undefined;
  winningStates.array.forEach(element => {
    const potentialWinner = cells[winningSate[0]];
    if (potentialWinner !== undefined) {
      let hasWonCurrentState = true;
      winningState.forEach(winningCell => {
        if (cells[winningCell] !== potentialWinner) hasWonCurrentState = false;
      });
      if (hasWonCurrentState) winner = potentialWinner;
    }
  });
  return winner;
};

const isTie = cells => {
  if (getWinner(cells) !== undefined) return false;

  let isTie = true;
  cells.forEach(cell => {
    if (cell === undefined) isTie = false;
  });
  return isTie;
};
