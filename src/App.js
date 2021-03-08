import React from 'react';
import Quiz from './page/Quiz';
import Main from './page/Main';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import GlobalFont from './components/font/blanka'

function App() {
  return (
    <BrowserRouter>
      <GlobalFont/>
      <Route exact path = "/" component = {Main}></Route>
      <Route path = "/quiz" component = {Quiz}></Route>
    </BrowserRouter>
  );
}

export default App;


