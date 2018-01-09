import React from 'react';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  /*
  deleteCategory() {
    this.props.deleteCategory('12');
  }
  */

  render() {
    let idName = 'erase_' + this.props.name;
    return (
      <div>
        <button id={idName} onClick={() => this.props.deleteButton(this.props.name)}>
          -
        </button>
        <label>{this.props.name}</label>
        <input type="text" id="portion" onChange={this.handleChange} placeholder="Nothing to see rn" />
        <input type="text" id="grade" onChange={this.handleChange} placeholder="Nothing to see rn" />
      </div>
    );
  }
}
