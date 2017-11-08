import React, {Component} from 'react';
import './Day.css';

class Day extends Component {
  constructor(props){
    super(props);
    console.log("test");
  }

  render(){
    return(
      <div className="col calendar-day">
        <p>{this.props.date}</p>
      </div>
    )
  }
}

export default Day;
