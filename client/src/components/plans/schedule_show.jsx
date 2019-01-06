import React from 'react';
import ScheduleItem from './schedule_item';

export default class ScheduleShow extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        SCHEDULE SHOW
        <ScheduleItem />
      </div>
    );
  }
};