import React, { Component, PropTypes } from 'react';

export default class Inputthis extends Component {
  constructor() {
    super();
    this.state = {
      value: {},
      setValue: {}
    };
  }
  /*
  handleClick(e) {
    let inputValue = this.state.value;
    this.setState({ setValue: inputValue });
    console.log(this.state.setValue);
  }
*/
  handleChange(e) {
    /*
    need to check whether the value is NUMBER
    if the value is not number clear the input
    and make an alert saying that u should put in a number
    
    if(e.target.value) {

    }
    */
    let range = Integer.parseInt(e.target.value);

    if (typeof range != 'number') {
      alert('The Range Should be in Number');
    } else {
      let id = e.target.name;
      this.setState({ id: range });
    }
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div />
      /*
      <div>
        <div className="A+">
          <label>A+</label>
          <input type="text" name="A+" onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label>A</label>
          <input type="text" name="A" onChange={this.handleChange.bind(this)} />
        </div>
        <div />

        <label>A-</label>
        <input type="text" name="A-" onChange={this.handleChange.bind(this)} />

        <label>B+</label>
        <input type="text" name="B+" onChange={this.handleChange.bind(this)} />

        <label>B</label>
        <input type="text" name="title" onChange={this.handleChange.bind(this)} />

        <label>B-</label>
        <input type="text" name="title" onChange={this.handleChange.bind(this)} />

        <label>C+</label>
        <input type="text" name="title" onChange={this.handleChange.bind(this)} />

        <label>C</label>
        <input type="text" name="title" onChange={this.handleChange.bind(this)} />

        <label>C-</label>
        <input type="text" name="title" onChange={this.handleChange.bind(this)} />
      </div>
      */
    );
  }
}
