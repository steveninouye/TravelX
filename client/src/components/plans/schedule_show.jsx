import React from 'react';
import ScheduleItemContainer from './schedule_item_container';
import List from '@material-ui/core/List';

export default class ScheduleShow extends React.Component {
  render() {
    const scheduleItems = this.props.attractions.map(attraction => (
      <ScheduleItemContainer key={attraction._id} attraction={attraction} />
    ));

    return (
      <List>
        {scheduleItems}
      </List>
    );
  }
};