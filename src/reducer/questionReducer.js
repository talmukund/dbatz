import * as types from '../action/actionTypes';
import initialState from './initialState';

export default function questionReducer(state = initialState.question, action) {
  switch (action.type) {
    case types.LOAD_QUESTION:
      return action.question;

   
    default:
      return state;
  }
}