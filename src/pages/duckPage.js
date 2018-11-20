import React, { Component } from 'react';
import { getDuck, getComment } from "../api"

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
    let { name, age, enjoys, fullImage } = this.state.duck
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
          <img className="fullImage" src={fullImage}/>
          <div id="profileInfo">
            <div id="profileInfo1">
              <div id="profileInfo2">
                <h2>{name}</h2>
                <h3>Age: {age}</h3>
                <p>Enjoys: {enjoys}</p>
              </div>
              <div id="comment">
                <h4>What other ducks are saying about {this.state.duck.name}:</h4>
                {this.state.allSet && <p>"{this.state.comments[0].body}"</p>}
                {this.state.allSet && <p>from {this.state.comments[0].author}</p>}
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
      if (resp.comments.length >= 0){
        this.setState({duck:resp.duck, comments: resp.comments, allSet: true})
      }else {
        this.setState({duck:resp.duck, comments: {body: "No one has commented on this duck yet.", author: "You should!"}, allSet: true})
      }
    })
  }

}

export default DuckPage;
