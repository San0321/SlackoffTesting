import React, { Component, PropTypes } from 'react';
import AddCategory from './addCategory';

export default class Category extends Component {
  // get initalState
  constructor() {
    super();
    this.state = {
      id: ['Participation', 'Homework', 'Midterm', 'Final'],
      portion: [0, 0, 0, 0],
      grade: [0, 0, 0, 0]
    };
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
    if (categoryName == '') {
      alert('Need to Type Something');
    } else {
      this.state.id.push(categoryName);
      this.setState(this.state);
      // document.getElementById
    }
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
            categories={this.state.id}
          />
        ))}
        <input type="text" ref="category" onChange={this.addCateoryChange.bind(this)} placeholder="Category" />
        <button id="addCategoryButton" name="add" onClick={this.addCategoryClick.bind(this)}>
          +
        </button>
        <button id="submitButton" name="submit">
          Submit
        </button>
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
