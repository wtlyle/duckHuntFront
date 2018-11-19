import React, { Component } from 'react';
import { getDuck } from "../api"

class DuckPage extends Component {
  constructor(props){
    super(props)

    this.state={
        duck: {
        name: '',
        age: '',
        enjoys: '',
        fullImage: ''
      }
    }
  }
  render() {
    let { allDuckies } = this.props
    let id = this.props.match.params.id
    let { name, age, enjoys, fullImage } = this.state.duck
    console.log(allDuckies);
    return (
      <div>
        <div id="profile">
          <img className="fullImage" src={fullImage}/>
          <div id="profileInfo">
            <div id="profileInfo1">
              <div id="profileInfo2">
                <h2>{name}</h2>
                <h3>Age: {age}</h3>
                <p>Enjoys: {enjoys}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    getDuck(this.props.match.params.id)
    .then(resp => {
      this.setState({duck:resp})
    })
  }

}

export default DuckPage;
