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
    let idForDelete = 'erase_' + this.props.name;
    let refForPercentage = 'percentage_' + this.props.name;
    let refForGrade = 'grade_' + this.props.name;
    return (
      <div>
        <button id={idForDelete} onClick={() => this.props.deleteButton(this.props.name)}>
          -
        </button>
        <label>{this.props.name}</label>
        <input
          type="text"
          id={refForPercentage}
          ref={refForPercentage}
          onChange={() => this.props.percentage(this)}
          placeholder="Percentage (without the symbol)"
        />
        <input
          type="text"
          id={refForGrade}
          ref={refForGrade}
          onChange={() => this.props.grade(this)}
          placeholder="My Grade"
        />
      </div>
    );
  }
}
