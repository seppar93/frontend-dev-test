import TICTACTOE from "src/store/actions/index.js";

import { createStore } from "redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

let sotre = createStore(TICTACTOE, applyMiddleware(logger));

export default store;
