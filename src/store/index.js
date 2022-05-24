import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import getApiReducer from './reducers/GetApi.reducer';
import getProductReducer from './reducers/GetProduct.reducer';

const rootReducers = combineReducers({ getApiReducer, getProductReducer });

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducers, middleware);
