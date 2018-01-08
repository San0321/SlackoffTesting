import React, { Component, PropTypes } from 'react';

export default class Category extends Component {
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
        <p>Participation</p>
        <button name="erase" onClick={this.handleClick.bind(this)}>-</button>
        <button name="add" onClick={this.handleClick.bind(this)}>-</button>
      </div>
    );
  }
}