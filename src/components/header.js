import React, { Component } from 'react';
import { Button } from 'react-bootstrap'


class Header extends Component {
  render() {
    return (
      <header id="headerComponent">

        <h1>
          <img src="../images/duck.gif" className="gif"/>
          Duck Hunt
          <img src="../images/duck.gif" className="gif"/>
        </h1>
        <div>
          <a className="btn btn-success" href='/'>Home</a>
          <a className="btn btn-info" href='/ducks'>See All Ducks</a>
          <a className="btn btn-warning" href='/ducks/new'>Create Profile</a>
        </div>
      </header>
    );
  }
}

export default Header;
