import { createStore, combineReducers, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import boardReducer from "./reducers/boardReducer"

const rootReducer = combineReducers({
  allBoards: boardReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
