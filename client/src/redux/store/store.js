import rootReducer from "../reducer/reducer.js";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"

const composeEnhancer= window.redux_devtool_extension_compose||compose;

  const store = createStore(rootReducer,
  composeEnhancer(applyMiddleware(thunk)))


export default store;
    