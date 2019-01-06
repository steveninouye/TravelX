import { googleApi } from "../../../../server/src/config/keys_dev";

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  infoCard: {
    width: "300px",
    position: "relative",
    bottom: "170px",
    left: "20px"
  },
  markerIcon: {
    textSize: "40px",
    cursor: "pointer"
  }
});

class PlanMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMarkerId: null
    };

    this.selectMarker = this.selectMarker.bind(this);
  }

  componentDidMount() {
    const { fetchPlan, planId } = this.props;
    fetchPlan(planId);
  }

  selectMarker(e) {
    this.setState({
      selectedMarkerId: e.currentTarget.id
    });
    debugger;
  }

  renderInfoCards() {
    if (this.state.selectedMarkerId === "1") {
      return (
        <Card
          lat={59.955413}
          lng={30.337844}
          className={this.props.classes.infoCard}
        >
          <CardContent>
            <Typography variant="h3">Eiffel Tower</Typography>
          </CardContent>
        </Card>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          defaultCenter={{ lat: 59.95, lng: 30.3 }}
          defaultZoom={11}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            lat={59.955413}
            lng={30.337844}
            className={this.props.classes.markerIcon}
            onClick={this.selectMarker}
            id="1"
          />
          {this.renderInfoCards()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default withStyles(styles)(PlanMap);
