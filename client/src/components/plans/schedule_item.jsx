import React from 'react';
import Card from '@material-ui/core/Card'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StarRatings from 'react-star-ratings';

class ScheduleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        reviews: [{ text: ''}]
      }
    };
  }

  componentDidMount() {
    const { getAttractionDetails, attraction } = this.props

    getAttractionDetails(attraction.reference).then(
      res => this.setState({ details: res.attractionDetails.data })
    );
  };

  render() {
    console.log(this.state)
    const { attraction } = this.props;

    const styles = {
      listItem: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '32px 10%',
      },
      iconContainer: { 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center' 
      },
      avatar: {
        background: 'white',
        padding: '10px 10px',
        alignSelf: 'center'
      },
      timingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '20px',
      },
      dayofWeek: {
        fontSize: '18px',
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: '5px',
      },
      timeOfDay: {
        textAlign: 'center',
        fontWeight: '300',
      },
      infoContainer: {
        height: '220px',
        minWidth: '500px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 60px 20px 60px',
      },
      attractionName: {
        fontSize: '20px',
        fontWeight: '700'
      },
      description: {
        fontWeight: '300',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '10px 0'    
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
      ratingContainer: {
        display: 'inline-flex'
      },
      rating: {
        fontSize: '25px',
        fontWeight: '500',
        lineHeight: '35px',
        marginLeft: '15px'
      },
      divider: {
        height: '30px',
        width: '1px',
        backgroundColor: 'gainsboro',
        borderRadius: '2px',
        margin: '0 auto',
        marginTop: '10px',
        marginBottom: '10px'
      }
    };

    const dow = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
      <>
        <Card raised>
          <ListItem style={styles.listItem}>

              <div style={styles.iconContainer}>
                <div style={styles.timingContainer}>
                  <Typography style={styles.dayofWeek}>
                    {dow[Math.floor(Math.random() * dow.length)]}
                  </Typography>

                  <Typography style={styles.timeOfDay}>
                    10a-12p
                  </Typography>
                </div>
                
                <ListItemAvatar style={styles.avatar}>
                  <Avatar src={attraction.icon}/>
                </ListItemAvatar>
              </div>

              <div style={styles.infoContainer}>
                <Typography style={styles.attractionName}>
                  {attraction.name}
                </Typography>

                <Typography 
                  gutterBottom 
                  paragraph 
                  variant="body1"
                  style={styles.description}
                >
                  {this.state.details.reviews[0].text}
                </Typography>

                <div style={styles.ratingContainer}>
                  <StarRatings
                    rating={attraction.rating}
                    starRatedColor="black"
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="5px"
                  />

                  <Typography style={styles.rating}>
                    {attraction.rating}
                  </Typography>
                </div>
              </div>

              <div style={styles.imageContainer}>
                <img style={styles.galleryPhoto} src={attraction.photos ? `api/places/photo/${attraction.photos[0].photo_reference}` : "http://urbanyvr.com/wp-content/uploads/2016/04/New-vancouver-art-gallery-plaza.jpg"} alt=""/>
              </div>
          </ListItem>
        </Card>

        <div style={styles.divider}></div>
      </>
    );
  }
}

export default ScheduleItem;