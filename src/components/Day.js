import React, {Component} from 'react';
import './style/Day.css';

class Day extends Component {
  constructor(props){
    super(props);
    console.log("test");

    // Function binds
    this.onSelected = this.onSelected.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  }

  // Event handlers
  onSelected() {
    this.props.handler(this.props.id);
  }

  // Rendering

  renderEvents() {
    /*

     */
    return(
      <div className="event-slots">
        <div className="event-slot">

        </div>
        <div className="event-slot">

        </div>
      </div>
    )
  }

  render(){
    return(
      <div className={ ""
          + " col"
          + " calendar-day"
          + (this.props.selectedDay ? " selected-day" : "")
          + (this.props.currMonth ? "" : " other-month")}
        onClick={this.onSelected}>
        {this.renderEvents()}
        <div className="day-label">
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}

export default Day;
