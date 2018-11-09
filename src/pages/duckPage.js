import React, { Component } from 'react';
import ducks from '../database.js'

class DuckPage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let id= this.props.match.params.id
    return (
      <div>
        <div id="profile">
          <img className="fullImage" src={ducks[id].fullImage}/>
          <div id="profileInfo">
            <div id="profileInfo1">
              <div id="profileInfo2">
                <h2>{ducks[id].name}</h2>
                <h3>Age: {ducks[id].age}</h3>
                <p>Enjoys: {ducks[id].enjoys}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DuckPage;
