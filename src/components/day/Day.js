import React, {Component} from 'react';
import './Day.css';

class Day extends Component {
  constructor(props){
    super(props);
    console.log("test");

    this.onSelected = this.onSelected.bind(this);
  }

  onSelected() {
    this.props.handler(this.props.id);
  }

  render(){
    return(
      <div
        className={ ""
          + " col"
          + " calendar-day"
          + (this.props.selectedDay ? " selected-day" : "")
          + (this.props.currMonth ? "" : " other-month")}
        onClick={this.onSelected}>
        <p>{this.props.date}</p>
      </div>
    )
  }
}

export default Day;
