import React, { Component } from 'react';
import '../App.css'
import ducks from '../database.js'
import DuckTale from '../components/ducktale.js'


class Home extends Component {
  render() {
    return (
      <main>
        <div>
          <h1>Featured Duck of the Moment</h1>
          <div>
            <DuckTale info={ducks[Math.floor(Math.random()*7)]} />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
