import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promiseMiddleware, reduxImmutableStateInvariant())
  );
}