import React, {Component} from 'react';
import Day from './Day';
import './style/Calendar.css';
import date from 'date-and-time';

const CAL_ROWS = 6;
const CAL_COLS = 7;

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.constants = {
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
    }

    this.state = {};

    const today = new Date();
    this.state.today = {
      day: today.getDay(),
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getYear() + 1900
    };

    // Binding functions
    this.onDaySelect = this.onDaySelect.bind(this);
    this.renderDayHeader = this.renderDayHeader.bind(this);
    this.renderDays = this.renderDays.bind(this);
  }

  onDaySelect(e) {
    this.setState(state => ({
      selectedDay: (e === this.state.selectedDay) ? undefined : e
    }));
  }

  renderDayHeader() {
    return (
      <div className="row">
        {this.constants.namedDays.map((day, ind) =>
          (
            <div className="col day-header-col" key={ind}>
              <p>{day}</p>
            </div>
          )
        )}
      </div>
    );
  }

  renderDays() {
    let calMonthItr = new Date(this.state.today.year, this.state.today.month, 1);
    calMonthItr = (calMonthItr.getDay() === 0) ?
      calMonthItr : date.addDays(calMonthItr, -calMonthItr.getDay());

    let weeks = [];
    for (let i = 0; i < CAL_ROWS; i++) {
      let week = [];
      for (let j = 0; j < CAL_COLS; j++) {
        week.push(
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
        <div id={i} key={i} className="row week-row">
          {week}
        </div>
      );
    }

    return (weeks);

  }

  render() {
    return (
      <div className="calendar-container container">
        {this.renderDayHeader()}
        {this.renderDays()}
      </div>
    );
  }
}

export default Calendar;
