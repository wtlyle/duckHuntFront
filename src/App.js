import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home.js'
import Ducks from './pages/ducks.js'
import NewDuck from './pages/newDuck.js'
import Header from './components/header.js'
import DuckPage from './pages/duckPage.js'


class App extends Component {
  render() {
    return (
      <div>
        <div className="masterBackground">
          <Header />
          <Router>
            <Switch>
              <Route exact path='/ducks/new' component={NewDuck} />
              <Route exact path= '/ducks/:id' component={DuckPage} />
              <Route exact path='/ducks' component={Ducks} />
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
