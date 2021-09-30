import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";

export const middlewares = [thunk];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV !== "production" &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({})
      : compose
  )
);

export default store;
