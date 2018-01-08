import React, { Component, PropTypes } from 'react';

export default class Inputthis extends Component {
  constructor() {
    super();
    this.state = {
      value: {},
      setValue: {}
    }
  }
  
  handleClick(e) {
    let inputValue = this.state.value;
    this.setState({setValue: inputValue});
    console.log(this.state.setValue);
  }
  
  handleChange(e){
    /*
    need to check whether the value is NUMBER
    if the value is not number clear the input
    and make an alert saying that u should put in a number
    
    if(e.target.value) {

    }
    */
    this.setState({value: e.target.value});

  }
  
  render() {
    
    return (
      <div>
        <p>A+</p>
        <input type="text" name="A+" onChange={this.handleChange.bind(this)}/>
        <p>A</p>
        <input type="text" name="A" onChange={this.handleChange.bind(this)}/>
        <p>A-</p>
        <input type="text" name="A-" onChange={this.handleChange.bind(this)}/>
        <p>B+</p>
        <input type="text" name="B+" onChange={this.handleChange.bind(this)}/>
        <p>B</p>
        <input type="text" name="title" onChange={this.handleChange.bind(this)}/>
        <p>B-</p>
        <input type="text" name="title" onChange={this.handleChange.bind(this)}/>
        <p>C+</p>
        <input type="text" name="title" onChange={this.handleChange.bind(this)}/>
        <p>C</p>
        <input type="text" name="title" onChange={this.handleChange.bind(this)}/>
        <p>C-</p>
        <input type="text" name="title" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}