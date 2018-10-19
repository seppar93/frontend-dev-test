import { addMove, resetGame } from "../store/actions/index.js";
import TicTacToe from "./TicTacToe.js";
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
  winningSates.forEach(winningState => {
    const potentialWinner = winningState[0];
    if (potentialWinner !== undefined) {
      let hasWonCurrentState = true;
      winningState.forEach(winningCell => {
        if (winningCell !== potentialWinner) hasWonCurrentState = false;
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

const isValidMove = (cells, cell) => {
  if (cells[cell] !== undefined) return false;

  if (getWinner(cells) !== undefined || isTie(cells)) return false;
  return true;
};

const getStatusMessage = (cells, player) => {
  if (isTie(cells)) return "It is a Tie!";

  const winner = getWinner(cells);
  if (winner !== undefined) {
    return `${winner} has won!`;
  } else {
    return `${player}`;
  }
};

const mapStateToProps = state => {
  return {
    player: state["player"],
    cells: state["cells"],
    message: getStatusMessage(state["cells"], state["player"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCell: (cell, cells, player) => {
      if (isValidMove(cells, cell)) dispatch(addMove(cell, player));
    },
    onReset: () => {
      dispatch(resetGame());
    }
  };
};

const GameState = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToe);
export default GameState;
