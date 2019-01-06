import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const ScheduleItem = (props) => {
  const { attraction } = props;

  const styles = {
    galleryPhoto: {
      height: '220px',
      width: '300px',
    },
    containerDiv: {
      height: '220px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 20px',
      border: '1px solid red'
    }
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={attraction.icon}/>
      </ListItemAvatar>

      <div style={styles.containerDiv}>
        <Typography>
          Tuesday
        </Typography>

        <Typography>
          10a-12p
        </Typography>
      </div>

      <div style={styles.containerDiv}>
        <ListItemText>
          {attraction.name}
        </ListItemText>

        <ListItemText>
          {attraction.rating}
        </ListItemText>

        <ListItemText>
          {attraction.formatted_address}
        </ListItemText>
      </div>

      <div style={styles.containerDiv}>
        <img style={styles.galleryPhoto} src="https://media-cdn.tripadvisor.com/media/photo-s/12/f5/f1/8d/eiffel-tower-summit-priority.jpg" alt=""/>
      </div>
      
      {/* <Typography>{attraction.name}</Typography> */}
     
      
      {/* {attraction.photos[0].photo_reference} */}
    </ListItem>
  );
}

export default ScheduleItem;