import React, { Component } from 'react';
import '../App.css'
import DuckTale from '../components/ducktale.js'
import { getDucks } from '../api'


class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      allDuckies: [],
      allSet: false
    }
  }
  render() {
    let id= Math.floor(Math.random()*this.state.allDuckies.length)
    return (
      <main>
        <div>
          <h1>Featured Duck of the Moment</h1>
          <main>
            {this.state.allSet && <DuckTale id={id} info={this.state.allDuckies.find(el => el.id == id)} />}
          </main>
        </div>
      </main>
    );
  }

  componentDidMount(){
    console.log("firing getDucks in Home");
       getDucks()
       .then(APIducks => {
           this.setState({allDuckies: APIducks, allSet: true})
       })
  }
}

export default Home;
