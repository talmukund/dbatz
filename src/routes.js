import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import QuestionPage from './components/question/QuestionPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />    
    <Route path="question" component={QuestionPage} />
  </Route>
);