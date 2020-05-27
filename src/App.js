import React from 'react';
import Login from "./Components/Login"
import MainPage from "./Components/MainPage"
import Lesson from "./Components/Lesson"
import Quiz from "./Components/Quiz"
import Result from "./Components/Result"
import { Switch, Route, Router } from 'react-router-dom';
import history from "./utils/history"
import {useAuth0} from "./react-auth0-spa"
import PrivateRoute from "./Components/PrivateRoute"

const App = () => {
  const {loading} = useAuth0();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home" exact component={MainPage} />
        <PrivateRoute path="/lesson" component={Lesson} />
        <PrivateRoute path="/quiz" component={Quiz} />
        <PrivateRoute path="/results" component={Result} />
      </Switch>
    </Router>
  )
}

export default App;
