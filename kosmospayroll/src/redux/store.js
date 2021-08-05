import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import REDUX_PERSIST from './ReduxPersistConfig';
import {persistStore, persistReducer} from 'redux-persist';

import {userReducer} from './userReducer';
import {employeesReducer} from './employeesReducer';
import {loadingReducer} from './loadingReducer';

const combinedReducer = combineReducers({
  userState: userReducer,
  employeesState: employeesReducer,
  loadingState: loadingReducer,
});

let persistedReducer = combinedReducer;

if (REDUX_PERSIST.active) {
  const persistConfig = REDUX_PERSIST.storeConfig;
  persistedReducer = persistReducer(persistConfig, combinedReducer);
}

const sagaMiddleware = createSagaMiddleWare();
const middleWares = [sagaMiddleware];
const store = createStore(persistedReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);

//sagaMiddleware.run(root);

export const storeCombined = () => {
  return {store, persistor};
};
