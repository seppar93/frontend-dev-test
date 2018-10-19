import { combineReducers } from "redux";
import cells from "./store/reducers/index.js";
import player from "./store/reducers/Player.js";

const TICTACTOE = combineReducers;
({ cells, player });

export default combineReducers({
  TICTACTOE
});
