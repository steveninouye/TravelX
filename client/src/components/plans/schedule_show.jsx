import React from 'react';
import ScheduleItem from './schedule_item';
import List from '@material-ui/core/List';
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'

export default class ScheduleShow extends React.Component {
  render() {
    const scheduleItems = this.props.attractions.map(attraction => (
      <ScheduleItem key={attraction.id} attraction={attraction} />
    ));

    return (
      <List>
        {scheduleItems}
      </List>
    );
  }
};