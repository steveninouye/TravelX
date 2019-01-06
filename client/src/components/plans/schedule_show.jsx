import React from 'react';
import ScheduleItem from './schedule_item';

export default class ScheduleShow extends React.Component {
  render() {
    const scheduleItems = this.props.attractions.map(attraction => (
      <ScheduleItem key={attraction.id} attraction={attraction} />
    ));

    return (
      <div style={this.props.style}>
        SCHEDULE SHOW
        {scheduleItems}
      </div>
    );
  }
};