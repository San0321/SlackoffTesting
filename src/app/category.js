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
      result: ''
    };
  }
  componentDidMount() {
    debugger;
  }

  handleClick(e) {
    let inputValue = this.state.value;
    this.setState({ setValue: inputValue });
    console.log(this.state.setValue);
  }

  deleteCategory(name) {
    // it goes here but idk
    //debugger;
    this.state.id.splice(this.state.id.indexOf(name), 1);
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
        this.state.portion.push(0);
        this.state.grade.push(0);
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
    this.state.result += 'Your Overall grade is Currently ' + temp + '%';

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
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        debugger;
        firebase
          .database()
          .ref('users/' + firebase.auth().currentUser.email.split('@')[0])
          .set(toBeSaved);
      } else {
        // No user is signed in.
      }
    });
  }

  render() {
    return (
      // initial state
      <div>
        {this.state.id.map(item => (
          <AddCategory
            key={item}
            name={item}
            deleteButton={this.deleteCategory.bind(this)}
            percentage={this.percentageChange.bind(this)}
            grade={this.gradeChange.bind(this)}
            categories={this.state.id}
          />
        ))}
        <input type="text" ref="category" onChange={this.addCateoryChange.bind(this)} placeholder="Category" />
        <button id="addCategoryButton" name="add" onClick={this.addCategoryClick.bind(this)}>
          +
        </button>
        <button id="submitButton" name="submit" onClick={this.submitCalc.bind(this)}>
          Calculate
        </button>
        <p>{this.state.result}</p>
        <button onClick={this.saveGrade.bind(this)}>Save</button>
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
