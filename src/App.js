import React from 'react';
import MainPage from "./Components/MainPage"
import Lesson from "./Components/Lesson"
import Quiz from "./Components/Quiz"
import Result from "./Components/Result"
import { Switch, Route, Router } from 'react-router-dom';
import history from "./utils/history"

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/lesson" component={Lesson} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Result} />
      </Switch>
    </Router>
  )
}

export default App;
