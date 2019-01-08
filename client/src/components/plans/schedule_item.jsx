import React from "react";
import Card from "@material-ui/core/Card";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AttractionRating from "./AttractionRating";

class ScheduleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        reviews: [{ text: "", rating: 0 }]
      }
    };
  }

  componentDidMount() {
    const { getAttractionDetails, attraction } = this.props;

    getAttractionDetails(attraction.reference).then(res =>
      this.setState({ details: res.attractionDetails.data })
    );
  }

  selectBestReview() {
    const { details } = this.state;
      
    if (details.reviews && details.reviews.length > 0) {
      const filteredReviews = details.reviews.filter(
        review => review.rating === 5 && review.text.length > 300
      );

      return filteredReviews.length > 0 ? filteredReviews[0].text : "No reviews available."
    } else {
      return "No reviews available."
    }
  }

  render() {
    const { attraction } = this.props;

    const styles = {
      listItem: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "32px 10%"
      },
      iconContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      },
      avatar: {
        background: "white",
        padding: "10px 10px",
        alignSelf: "center"
      },
      timingContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "20px",
        width: '100px'
      },
      dayofWeek: {
        fontSize: "18px",
        fontWeight: "400",
        textAlign: "center",
        marginBottom: "5px"
      },
      timeOfDay: {
        textAlign: "center",
        fontWeight: "300"
      },
      infoContainer: {
        height: "220px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-between",
        padding: "0 60px 20px 60px"
      },
      attractionName: {
        fontSize: "20px",
        fontWeight: "700"
      },
      description: {
        fontWeight: "300",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "20px 0"
      },
      textFade: {
        width: '100%',
        minHeight: '30px',
        marginTop: '-40px',
        background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1))'
      },
      imageContainer: {
        height: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      },
      galleryPhoto: {
        height: "220px",
        width: "300px"
      },
      divider: {
        height: "30px",
        width: "1px",
        backgroundColor: "gainsboro",
        borderRadius: "2px",
        margin: "0 auto",
        marginTop: "10px",
        marginBottom: "10px"
      }
    };

    return (
      <>
        <Card raised>
          <ListItem style={styles.listItem}>
            <div style={styles.iconContainer}>
              <div style={styles.timingContainer}>
                <Typography style={styles.dayofWeek}>
                  {this.props.block.dow}
                </Typography>

                <Typography style={styles.timeOfDay}>
                  {this.props.block.time}
                </Typography>
              </div>

              <ListItemAvatar style={styles.avatar}>
                <Avatar src={attraction.icon} />
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
                {this.selectBestReview()}
              </Typography>

              <div style={styles.textFade}></div>

              <AttractionRating attraction={attraction} />
            </div>

            <div style={styles.imageContainer}>
              <img
                style={styles.galleryPhoto}
                src={
                  attraction.photos
                    ? `api/places/photo/${attraction.photos[0].photo_reference}`
                    : "http://urbanyvr.com/wp-content/uploads/2016/04/New-vancouver-art-gallery-plaza.jpg"
                }
                alt=""
              />
            </div>
          </ListItem>
        </Card>

        <div style={styles.divider} />
      </>
    );
  }
}

export default ScheduleItem;
