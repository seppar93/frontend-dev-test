import { combineReducers } from "redux";
import cells from "src/store/reducers/index.js";
import player from "src/store/reducers/Player.js";

const TICTACTOE = combineReducers;
({ cells, player });

export default combineReducers({
  TICTACTOE
});
