import React, { Component } from 'react';



class NewDuck extends Component {
  constructor(props){
    super(props)

    this.state={
      form: {}
    }
  }
  render() {
    return (
      <main>
        <div className="formField">
          <h1 className="subtitle">Create a Profile Today!</h1>
          <div id="formPage">
            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <label for="name" className="col-lg-2 control-label">Name</label>
                  <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputName" placeholder="Your Name Here" required onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label for="age" className="col-lg-2 control-label" required>Age</label>
                  <div className="col-lg-10">
                    <input type="number" className="form-control" id="inputAge" onChange={this.handleChange} />
                  </div>
                </div>
                <div class="form-group">
                  <label for="enjoys" class="col-lg-2 control-label">Enjoys</label>
                  <div class="col-lg-10">
                    <textarea class="form-control" rows="3" id="enjoys" placeholder="Enter a description of things you enjoy" required onChange={this.handleChange}></textarea>
                  </div>
                </div>
              <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <button type="reset" class="btn btn-default">Reset</button>
                  <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Create Profile</button>
                </div>
              </div>
              </fieldset>
            </form>
          </div>
        </div>
      </main>
    );
  }
  handleChange = (event) => {
  let {form } = this.state
  form[event.target.name] = event.target.value
  console.log(form);
  this.setState({form: form})
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
}

export default NewDuck;
