import React from 'react';
import './App.css';
import MainPage from './pages/MainPage'
import CreateAccount from './pages/CreateAccount'
import SignIn from './pages/SignIn'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/ezbank/create-account'>
          <CreateAccount />
        </Route>

        <Route path='/ezbank/sign-in'>
          <SignIn />
        </Route>

        <Route path='/ezbank'>
          <MainPage />
        </Route>

        <Route exact path="/">
          <Redirect to="/ezbank" />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
