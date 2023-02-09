import { applyMiddleware, compose, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { makeMainData } from "./factories";
import rootReducer, { State } from "./reducers";
import { loadFromLocalStorage, persistToLocalStorage } from "./utils/localStorage";

declare global {
  interface Window {
    __PRELOADED_STATE__?: typeof rootReducer;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function configureStore(): Store<State> {
  const preloadedState = window.__PRELOADED_STATE__;
  const middlewares = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const storePersisted = loadFromLocalStorage()?.rulingsList?.length > 0 ? loadFromLocalStorage() : {rulingsList: makeMainData().data}
  const store = createStore(rootReducer, storePersisted as any, enhancer);
  
  delete window.__PRELOADED_STATE__;
  store.subscribe(() => persistToLocalStorage(store.getState()))
  return store;
}

export default configureStore;
