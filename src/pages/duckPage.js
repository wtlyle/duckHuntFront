import React, { Component } from 'react';
import { getDuck, getComment, updateCounter } from "../api"

class DuckPage extends Component {
  constructor(props){
    super(props)

    this.state={
        duck: {
          name: '',
          age: '',
          enjoys: '',
          fullImage: '',
          quacks: ''
        },
        comments: [],
        allSet: false
    }
  }
  render() {
    let id = this.props.match.params.id
    let { name, age, enjoys, fullImage, quacks } = this.state.duck
    console.log(this.state.comments);
    // if(this.state.comments.length > 0){
    //   let { body, author } = this.state.comments[Math.floor(Math.random()*this.state.comments.length-1)]
    // }else{
    //   let body = 'No one has commented on this duck yet.'
    //   let author = 'You should!'
    // }
    return (
      <div>
        <div id="profile">
        <button id="leftArrow">Swipe Left</button>
          <img className="fullImage" src={fullImage}/>
          <div id="profileInfo">
            <div id="profileInfo1">
              <div id="profileInfo2">
                <h2>{name}</h2>
                <h3>Age: {age}</h3>
                <p>Enjoys: {enjoys}</p>
                <h4> DuckCalls: </h4>
                <button className="callButtonShow" onClick={this.upCallCount}>
                  <p className="counter">{quacks}</p>
                </button>
              </div>

              <div id="comment">
                <h4>What other ducks are saying about {this.state.duck.name}:</h4>
                {this.state.allSet && <p>"{this.state.comments[0].body}"</p>}
                {this.state.allSet && <p>from {this.state.comments[0].author}</p>}
                {!this.state.allSet && <p>No one has commented on this duck yet.</p>}
                {!this.state.allSet && <p>You should!</p>}
              </div>
            </div>
          </div>
          <button id="rightArrow">Swipe Right</button>
        </div>
      </div>
    );
  }

  componentDidMount(){
    getDuck(this.props.match.params.id)
    .then(resp => {
      if (resp.comments.length >= 1){
        this.setState({duck:resp.duck, comments: resp.comments, allSet: true})
      }else {
        this.setState({duck:resp.duck, allSet: false})
      }
    })
  }

  upCallCount = () => {
    let { name, age, enjoys, fullImage, quacks } = this.state.duck
    updateCounter({id: this.props.match.params.id, name: name, age: age, enjoys: enjoys, fullImage: fullImage, quacks: quacks + 1})
    .then(resp => {
      console.log(resp);
      this.setState({duck:resp})
    })
  }

}

export default DuckPage;
