import React, { Component } from 'react';
import '../App.css'
import ducks from '../database.js'
import DuckTale from '../components/ducktale.js'


class Home extends Component {
  render() {
    let id= Math.floor(Math.random()*7)
    return (
      <main>
        <div>
          <h1>Featured Duck of the Moment</h1>
          <main>
            <DuckTale id={id} info={ducks[id]} />
          </main>
        </div>
      </main>
    );
  }
}

export default Home;
