import React, { Component, PropTypes } from 'react';

export default class SignUp extends Component {
  // get initalState
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeId(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangePw(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let setUser = function(work, email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function() {
          // change the button layout
          work.props.checking();
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    };
    setUser(this, this.state.username, this.state.password);

    /*
    const accountRef = firebase.database().ref('account');
    const item = {
      title: this.state.username,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
    */
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Email address
            </label>
              <input type="text" id="id" className="form-control" onChange={this.handleChangeId.bind(this)} value={this.state.username} />
          </div>
          <div className="form-group">
            <label>
              Password
            </label>
              <input
                type="password"
                id="password"
                onChange={this.handleChangePw.bind(this)}
                value={this.state.password}
                className="form-control"
              />
            </div>
          <input type="submit" value="Sign Up" className="btn btn-default btn-block" />
        </form>
      </div>
    );
  }
}
