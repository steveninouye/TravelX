import { googleApi } from "../../../../server/src/config/keys_dev";

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

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

  renderMarkers() {
    let markers = this.props.attractions.map(attraction => {
      let { lat, lng } = attraction.geometry.location;
      let id = attraction.id;
      return (
        <MapMarker
          lat={lat}
          lng={lng}
          id={id}
          key={id}
          onClick={this.selectMarker}
        />
      );
    });

    return markers;
  }

  renderInfoCards() {
    if (this.p) {
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
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          defaultCenter={{ lat: 48.85296820000001, lng: 2.3499021 }}
          defaultZoom={13}
        >
          {this.renderMarkers()}
          {this.renderInfoCards()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default withStyles(styles)(PlanMap);
