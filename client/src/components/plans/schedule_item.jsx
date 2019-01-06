import React from 'react';
import Typography from '@material-ui/core/Typography';

const ScheduleItem = (props) => {
  const { attraction } = props;

  return (
    <div>
      <Typography>{attraction.name}</Typography>
      {attraction.rating}
      {attraction.formatted_address}
      <img src={attraction.icon}></img>
      {attraction.photos[0].photo_reference}
      <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/f5/f1/8d/eiffel-tower-summit-priority.jpg" alt=""/>
    </div>
  );
}

export default ScheduleItem;