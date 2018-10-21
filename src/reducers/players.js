const initialState = {
  player1Name: "t1",
  player2Name: "t2"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "players/PLAYER1_NAME_CHANGED":
      return {
        ...state,
        player1Name: action.name
      };

    case "players/PLAYER2_NAME_CHANGED":
      return {
        ...state,
        player2Name: action.name
      };

    default:
      return state;
  }
};
