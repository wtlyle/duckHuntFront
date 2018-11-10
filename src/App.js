import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home.js'
import Ducks from './pages/ducks.js'
import NewDuck from './pages/newDuck.js'
import Header from './components/header.js'
import DuckPage from './pages/duckPage.js'
import { getDucks, getDuck } from './api'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      allDuckies: []
    }
  }

  componentDidMount() {
    console.log("firing getDucks");
       getDucks()
       .then(APIducks => {
           this.setState({allDuckies: APIducks})
       })
   }

  render() {
    return (
      <div>
        <div className="masterBackground">
          <Header />
          <Router>
            <Switch>
              <Route exact path='/ducks/new' component={NewDuck} />
              <Route exact path= '/ducks/:id' render={(props) => <DuckPage allDuckies={this.state.allDuckies} {...props}/>} />
              <Route exact path='/ducks' render={(props) => <Ducks allDuckies={this.state.allDuckies} {...props}/>} />
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
