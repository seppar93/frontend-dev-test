import TICTACTOE from "./reducers/index";

import { createStore } from "redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

let store = createStore(TICTACTOE, applyMiddleware(logger));

export default store;
