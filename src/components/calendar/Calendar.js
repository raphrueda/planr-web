import React, {Component} from 'react';
import Day from '../day/Day';
import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    const today = new Date();
    this.state.today = {
      day: today.getDay(),
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getYear()
    };
  }

  render() {
    let firstWeek = [];
    let prevMonth = (this.state.today.month - 1) % this.props.months;
    let prevMonthYear = (prevMonth === (this.props.months - 1))
      ? this.state.today.year - 1 : this.state.today.year;
    let lastMonthLastDay = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
    let startInactive = lastMonthLastDay - this.state.today.day;
    for (let i = 1; i <= this.state.today.day; i++) {
      firstWeek.push(<Day date={startInactive + i}/>);
    }
    for (let i = 1; i + this.state.today.day <= this.props.days; i++) {
      firstWeek.push(<Day date={i}/>);
    }
    let weekRows = [];
    for (let i = 0; i < this.props.weeks; i++) {
      weekRows.push(<div className="row week-row" key={i}></div>);
    }
    return (
      <div className="calendar-container container">
        <div className="row">
          {this.props.namedDays.map((day, ind) => {
            return (
              <div className="col day-header-col" key={ind}>
                {day}
              </div>
            )
          })}
        </div>
        <div className="row week-row" key="a">
          {firstWeek}
        </div>
        {weekRows}
      </div>
    );
  }
}

Calendar.defaultProps = {
  namedDays: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],
  weeks: 6,
  days: 7,
  months: 12
};

export default Calendar;
