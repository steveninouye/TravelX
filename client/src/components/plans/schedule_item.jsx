import React from 'react';

const ScheduleItem = (props) => {
  const { attraction } = props;

  return (
    <div>{attraction.name}</div>
  );
}

export default ScheduleItem;