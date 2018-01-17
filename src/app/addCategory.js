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
  componentWillReceiveProps() {
    console.log('When I am being called?');
  }
  componentDidUpdate() {
    if (this.props.data.loaded) {
      // for (let i = 0; i < this.props.categories.length; i++) {
      // let this.refs
      console.log(this.props.name);
      let percentage = this.refs['percentage_' + this.props.name];
      let grade = this.refs['grade_' + this.props.name];
      percentage.value = this.props.data.portion[this.props.categories.indexOf(this.props.name)];
      grade.value = this.props.data.grade[this.props.categories.indexOf(this.props.name)];
      //    }
    }
    if (this.props.reset) {
      let percentage = this.refs['percentage_' + this.props.name];
      let grade = this.refs['grade_' + this.props.name];
      percentage.value = '';
      grade.value = '';
    }
  }
  componentDidMount() {
    if (this.props.data.loaded) {
      // for (let i = 0; i < this.props.categories.length; i++) {
      // let this.refs
      console.log(this.props.name);
      let percentage = this.refs['percentage_' + this.props.name];
      let grade = this.refs['grade_' + this.props.name];
      percentage.value = this.props.data.portion[this.props.categories.indexOf(this.props.name)];
      grade.value = this.props.data.grade[this.props.categories.indexOf(this.props.name)];
      //    }
    }
  }

  render() {
    let idForDelete = 'erase_' + this.props.name;
    let refForPercentage = 'percentage_' + this.props.name;
    let refForGrade = 'grade_' + this.props.name;
    return (
      <div className="row">
        <button className="btn btn-danger btn-sm col-lg-1" id={idForDelete} onClick={() => this.props.deleteButton(this.props.name)}>
          <span className="glyphicon glyphicon-minus"></span>
        </button>
        <label className="col-lg-5">{this.props.name}</label>
        <input
          type="text"
          id={refForPercentage}
          ref={refForPercentage}
          onChange={() => this.props.percentage(this)}
          placeholder="Percentage (without the symbol)"
          className="col-lg-3"
        />
        <input
          type="text"
          id={refForGrade}
          ref={refForGrade}
          onChange={() => this.props.grade(this)}
          placeholder="My Grade"
          className="col-lg-3"
        />
      </div>
    );
  }
}
