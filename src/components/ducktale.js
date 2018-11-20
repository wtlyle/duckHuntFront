import React, { Component } from 'react';

class Ducktale extends Component {
  render() {
    let {fullImage, name, quacks} = this.props.info
    let image = fullImage != '' ? fullImage : '/images/duck.gif'
    console.log(this.props.info);
    return (
      <a id="card" href={`/ducks/${this.props.id}`}>
        <img src={image} className="tileImage" />
        <div id="cardInfo">
          <h4>{name}</h4>
          <p className="callButtonCard">{quacks}</p>
        </div>
      </a>
    );
  }
}

export default Ducktale;
