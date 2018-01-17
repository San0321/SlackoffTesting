import React, { Component, PropTypes } from 'react';
import AddCategory from './addCategory';
import firebase from '../firebase.js';

export default class Category extends Component {
  // get initalState
  constructor() {
    super();
    this.state = {
      id: ['Participation', 'Homework', 'Midterm', 'Final'],
      portion: [0, 0, 0, 0],
      grade: [0, 0, 0, 0],
      result: '',
      loaded: false
    };
  }

  componentDidMount() {
    var self = this;
    let loginPromise = new Promise(function(resolve, reject) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // pass it to then
          resolve(firebase.auth().currentUser.email.split('@')[0]);
        } else {
          // No user is signed in.
          reject();
        }
      });
    });
    let setUser = function() {
      loginPromise
        .then(function(userId) {
          // if the user is logged in, retrieve the existing data
          firebase
            .database()
            .ref('/users/' + userId)
            .once('value')
            .then(function(snapshot) {
              let data = snapshot.val();
              data.loaded = true;
              self.setState(data);
            });
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    setUser();
  }

  componentDidUpdate() {
    if (this.props.emailAccount.user != null) {
      let userId = this.props.emailAccount.user.split('@')[0];
      let checkData = function(work, userId) {
        firebase
          .database()
          .ref('/users/' + userId)
          .once('value')
          .then(function(snapshot) {
            let data = snapshot.val();
            data.loaded = true;
            work.setState(data);
          });
      };
      if (this.props.emailAccount.initial) {
        checkData(this, userId);
        this.props.emailAccount.initial = false;
      }
    }
    if (this.props.emailAccount.reset) {
      this.setState({
        id: ['Participation', 'Homework', 'Midterm', 'Final'],
        portion: [0, 0, 0, 0],
        grade: [0, 0, 0, 0],
        result: '',
        loaded: false
      });
      this.props.emailAccount.reset = false;
    }
  }

  handleClick(e) {
    let inputValue = this.state.value;
    this.setState({ setValue: inputValue });
    console.log(this.state.setValue);
  }

  deleteCategory(name) {
    // it goes here but idk
    //debugger;
    let index = this.state.id.indexOf(name);

    // delete the information from the state
    this.state.id.splice(index, 1);
    this.state.portion.splice(index,1);
    this.state.grade.splice(index,1);
    //console.log(JSON.stringify(name));
    //this.state.id.splice(this.state.id.indexOf(name), 1);
    this.setState(this.state);
  }

  handleChange(e) {
    /*
    need to check whether the value is NUMBER
    if the value is not number clear the input
    and make an alert saying that u should put in a number
    
    if(e.target.value) {

    }
    */
    this.setState({ value: e.target.value });
  }
  addCateoryChange(e) {
    this.setState({ category: e.target.value });
  }
  addCategoryClick(e) {
    let categoryName = this.state.category;
    if (categoryName === undefined) {
      alert('Need to Type Something');
    } else {
      categoryName = categoryName.trim();
      if (categoryName === '') {
        alert('Need to Type Something');
      } else {
        this.state.id.push(categoryName);
        this.state.portion.push("");
        this.state.grade.push("");
        // reset the input field
        this.refs.category.value = '';
        this.setState(this.state);
      }
    }
  }
  percentageChange(e) {
    // debugger;
    //console.log(e.target.id);
    // e.props.name is the name
    // e.refs.value is the value
    //this.setState(:e.refs.value);
    // console.log(e.props);
    // console.log(this);

    let percentage_name = e.refs['percentage_' + e.props.name];
    //debugger;
    if (isNaN(percentage_name.value)) {
      percentage_name.value = percentage_name.value.substring(0, percentage_name.value.length - 1);
    } else {
      this.state.portion[this.state.id.indexOf(e.props.name)] = percentage_name.value;
    }
    this.setState(this.state);
  }
  gradeChange(e) {
    let grade_name = e.refs['grade_' + e.props.name];
    if (isNaN(grade_name.value)) {
      grade_name.value = grade_name.value.substring(0, grade_name.value.length - 1);
    } else {
      this.state.grade[this.state.id.indexOf(e.props.name)] = grade_name.value;
    }
    this.setState(this.state);
  }

  submitCalc(e) {
    e.preventDefault();
    this.state.result = '';
    let temp = 0.0;
    for (let i = 0; i < this.state.id.length; i++) {
      let perGrade = this.state.portion[i] * 0.01 * this.state.grade[i];
      this.state.result += this.state.id[i];
      this.state.result += ' : ';
      this.state.result += perGrade;
      this.state.result += '% ';
      temp += perGrade;
    }
    this.state.result += ' \n Your Overall grade is Currently ' + temp + '%';

    /*
      Participation : %
      HomeWork : %
      Midterm : %
      Overall : %
     */
    this.setState(this.state);
  }

  saveGrade() {
    let toBeSaved = this.state;
    toBeSaved.result = "";
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firebase
          .database()
          .ref('users/' + firebase.auth().currentUser.email.split('@')[0])
          .set(toBeSaved);
      } else {
        // No user is signed in.
        alert('Need to Sign in to save data');
      }
    });
  }

  render() {
    return (
      // initial state
      <div className="row">
        {this.state.id.map(item => (
          <AddCategory
            key={item}
            name={item}
            deleteButton={this.deleteCategory.bind(this)}
            percentage={this.percentageChange.bind(this)}
            grade={this.gradeChange.bind(this)}
            categories={this.state.id}
            data={this.state}
            reset={this.props.emailAccount.reset}
          />
        ))}
        <div className="row">
          <input className="col-lg-10" type="text" ref="category" onChange={this.addCateoryChange.bind(this)} placeholder="Category" />
          <button className="btn btn-success btn-sm col-lg-1" id="addCategoryButton" name="add" onClick={this.addCategoryClick.bind(this)}>
            <span className="glyphicon glyphicon-plus"></span>
          </button>
          <button className="btn btn-default col-lg-1" id="submitButton" name="submit" onClick={this.submitCalc.bind(this)}>
            Calculate
          </button>
        </div>
        <div className="row">
          <div className="blockquote">
            <p className="mb-0">{this.state.result}</p>
          </div>
          <button className="btn btn-outline-info text-center btn-block" onClick={this.saveGrade.bind(this)}>Save</button>
        </div>
        
      </div>
    );
  }
}

/*


 <p>Homework</p>
        <button name="erase" onClick={this.handleClick.bind(this)}>
          -
        </button>
        <input type="text" onChange={this.handleChange.bind(this)} placeholder="32 (without percentage symbol)" />
        <p>Midterm</p>
        <button name="erase" onClick={this.handleClick.bind(this)}>
          -
        </button>
        <input type="text" onChange={this.handleChange.bind(this)} placeholder="32 (without percentage symbol)" />
        <p>Final</p>
        <button name="erase" onClick={this.handleClick.bind(this)}>
          -
        </button>
        <input type="text" onChange={this.handleChange.bind(this)} placeholder="32 (without percentage symbol)" />
        */
