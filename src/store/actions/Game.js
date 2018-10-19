export const addMove = (cell, player) => {
  return {
    type: "ADD-MOVE",
    cell: cell,
    player: player
  };
};

export const resetGame = () => {
  return {
    type: "RESET"
  };
};
