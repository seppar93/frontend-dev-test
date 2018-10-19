import { combineReducers } from "redux";
import cells from "./Cells.js";
import player from "./Player.js";

const TicTacToeApp = combineReducers({ cells, player });

export default combineReducers({
  TicTacToeApp
});
