import React, { Component } from 'react';
import DuckTale from '../components/ducktale.js'
import { getDuck } from '../api'


class Ducks extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.allDuckies);
    let duckies = this.props.allDuckies.map((duck,i) => {
      console.log("i'm doing stuff");
       return <DuckTale id={i + 1} info={duck} />
    })

    return (
      <main>
        <div className="cardLayout">
        {duckies}
        </div>
      </main>
    );
  }
}

export default Ducks;
