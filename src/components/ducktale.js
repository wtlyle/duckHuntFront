import React, { Component } from 'react';

class Ducktale extends Component {
  render() {

    return (
      <a id="card" href={`/ducks/${this.props.id}`}>
        <img src={this.props.info.fullImage} className="tileImage" />
        <div id="cardInfo">
          <h4>{this.props.info.name}</h4>
        </div>
      </a>
    );
  }
}

export default Ducktale;
