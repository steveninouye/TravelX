import React from 'react';
import ScheduleItemContainer from './schedule_item_container';
import List from '@material-ui/core/List';

export default class ScheduleShow extends React.Component {
  mapIndexToBlock(idx) {
    const dow = [
      "Monday",
      "Wednesday", // change this back
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    const time = [
      "9a-12p",
      "1p-3p",
      "4p-6p"
    ];

    return {
      dow: dow[Math.floor((idx / time.length) % dow.length)],
      time: time[idx % time.length]
    };
  };

  render() {
    const scheduleItems = this.props.attractions.map((attraction, idx) => (
      <ScheduleItemContainer 
        key={attraction._id} 
        attraction={attraction}
        block={this.mapIndexToBlock(idx)}
      />
    ));

    return (
      <List>
        {scheduleItems}
      </List>
    );
  }
};