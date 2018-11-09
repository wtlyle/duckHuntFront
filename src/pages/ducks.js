import React, { Component } from 'react';
import DuckTale from '../components/ducktale.js'
import ducks from '../database.js'

class Ducks extends Component {
  constructor(props){
    super(props)

    this.state = {
      allDuckies: []
    }
  }
  componentDidMount(){
    let duckies = ducks.map((duck,i) => {
      console.log(duck);
       return {name: duck.name, age: duck.age, enjoys: duck.enjoys, fullImage: duck.fullImage}
    })
    this.setState({allDuckies: duckies})
  }
  render() {
    console.log(this.state.allDuckies);
    let duckies = this.state.allDuckies.map((duck,i) => {
      console.log("i'm doing stuff");
       return <DuckTale id={i} info={duck} />
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
