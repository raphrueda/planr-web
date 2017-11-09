import React, {Component} from 'react';
import Day from '../day/Day';
import './Calendar.css';
import date from 'date-and-time';

const CAL_ROWS = 6;
const CAL_COLS = 7;

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

    // Binding functions
    this.onDaySelect = this.onDaySelect.bind(this);
  }

  onDaySelect(e) {
    this.setState(state => ({
      selectedDay: (e === this.state.selectedDay) ? undefined : e
    }));
  }

  render() {
    let calMonthItr = new Date(this.state.today.year + 1900, this.state.today.month, 1);

    // If month starts on a non sunday, need to start calendar at end of previous month
    const startDay = calMonthItr.getDay();
    calMonthItr = (startDay === 0) ? calMonthItr : date.addDays(calMonthItr, -startDay);

    let weeks = [];
    for (let i = 0; i < CAL_ROWS; i ++) {
      let newRow = [];
      for (let j = 0; j < CAL_COLS; j ++) {
          newRow.push(
            <Day
              key={(i*CAL_COLS) + j}
              id={(i*CAL_COLS) + j}
              selectedDay={((i*CAL_COLS) + j) === this.state.selectedDay}
              currMonth={calMonthItr.getMonth() === this.state.today.month}
              date={calMonthItr.getDate()}
              handler={this.onDaySelect}/>
          );
          calMonthItr = date.addDays(calMonthItr, 1);
      }
      weeks.push(
        <div id={i} className="row week-row">
          {newRow}
        </div>
      );
    }

    return (
      <div className="calendar-container container">
        <div className="row">
          {this.props.namedDays.map((day, ind) => {
            return (
              <div className="col day-header-col" key={ind}>
                <p className="lead">{day}</p>
              </div>
            )
          })}
        </div>
        {weeks}
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
