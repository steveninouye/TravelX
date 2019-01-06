import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ScheduleItem = (props) => {
  const { attraction } = props;

  const styles = {
    timingContainer: {
      height: '220px',
      width: '60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 20px',
    },
    dayofWeek: {
      fontSize: '16px',
    },
    infoContainer: {
      height: '220px',
      width: '500px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px 20px',
    },
    attractionName: {
      fontSize: '20px',
      fontWeight: '700'
    },
    imageContainer: {
      height: '220px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    galleryPhoto: {
      height: '220px',
      width: '300px',
    },
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={attraction.icon}/>
      </ListItemAvatar>

      <div style={styles.timingContainer}>
        <Typography style={styles.dayofWeek}>
          Tuesday
        </Typography>

        <Typography>
          10a-12p
        </Typography>
      </div>

      <div style={styles.infoContainer}>
        <Typography style={styles.attractionName}>
          {attraction.name}
        </Typography>

        <Typography>
          {attraction.formatted_address}
        </Typography>

        <Typography>
          {attraction.rating}
        </Typography>
      </div>

      <div style={styles.imageContainer}>
        <img style={styles.galleryPhoto} src="https://media-cdn.tripadvisor.com/media/photo-s/12/f5/f1/8d/eiffel-tower-summit-priority.jpg" alt=""/>
      </div>
    </ListItem>
  );
}

export default ScheduleItem;