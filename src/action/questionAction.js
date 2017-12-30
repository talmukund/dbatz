import * as types from './actionTypes';

export function loadQuestion(question) {
  return {type: types.LOAD_QUESTION, question};
}