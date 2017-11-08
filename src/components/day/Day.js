import React, {Component} from 'react';
import './Day.css';

class Day extends Component {
  constructor(props){
    super(props);
    console.log("test");
  }

  render(){
    return(
      <div className="col calender-day">
        {this.props.date}
      </div>
    )
  }
}

export default Day;
