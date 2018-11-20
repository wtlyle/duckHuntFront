import React, { Component } from 'react';
import DuckTale from '../components/ducktale.js'
import { getDucks } from '../api'


class Ducks extends Component {
  constructor(props){
    super(props)

    this.state = {
      allDuckies: []
    }
  }

  render() {
    console.log(this.state.allDuckies);
    let duckies = this.state.allDuckies.map((duck) => {
      console.log("i'm doing stuff");
       return <DuckTale key={duck.id} id={duck.id} info={duck} />
    })

    return (
      <main>
        <div className="cardLayout">
        {duckies}
        </div>
      </main>
    );
  }
  componentDidMount() {
    console.log("firing getDucks in ducks");
       getDucks()
       .then(APIducks => {
           this.setState({allDuckies: APIducks})
       })
   }
}

export default Ducks;
