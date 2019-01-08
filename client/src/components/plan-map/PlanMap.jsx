import { googleApi } from "../../../../server/src/config/keys";

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { fitBounds } from "google-map-react/utils";

import MapMarker from "./MapMarker";
import MapMarkerInfoCard from "./MapMarkerInfoCard";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class PlanMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMarkerId: null,
      setInitialBounds: false,
      center: null,
      zoom: null
    };

    this.setInitialBounds = false;
    this.selectMarker = this.selectMarker.bind(this);
    this.closeMarkerInfoCard = this.closeMarkerInfoCard.bind(this);
  }

  componentDidMount() {
    // const { fetchPlan, planId } = this.props;
    // fetchPlan(planId);
  }

  fitMapToMarkers() {
    let markerLats = [];
    let markerLngs = [];

    for (let i = 0; i < this.props.itinerary.attractions.length; i++) {
      markerLats.push(
        this.props.itinerary.attractions[i].geometry.location.lat
      );
      markerLngs.push(
        this.props.itinerary.attractions[i].geometry.location.lng
      );
    }

    const bounds = {
      ne: {
        lat: Math.min(...markerLats),
        lng: Math.max(...markerLngs)
      },
      sw: {
        lat: Math.max(...markerLats),
        lng: Math.min(...markerLngs)
      }
    };

    const size = {
      width: 600,
      height: 600
    };

    const { center, zoom } = fitBounds(bounds, size);

    return { center, zoom };
  }

  selectMarker(e) {
    this.setState({
      selectedMarkerId: e.currentTarget.id
    });
  }

  closeMarkerInfoCard(e) {
    this.setState({
      selectedMarkerId: null
    });
  }

  renderMarkers() {
    let markers = this.props.itinerary.attractions.map(attraction => {
      let { lat, lng } = attraction.geometry.location;
      let id = attraction._id;
      let selected = false;

      if (this.state.selectedMarkerId === id) {
        selected = true;
      }

      return (
        <MapMarker
          lat={lat}
          lng={lng}
          id={id}
          key={id}
          selected={selected}
          clickHandler={this.selectMarker}
        />
      );
    });

    return markers;
  }

  renderInfoCards() {
    for (let i = 0; i < this.props.itinerary.attractions.length; i++) {
      const attraction = this.props.itinerary.attractions[i];
      const { lat, lng } = attraction.geometry.location;

      if (attraction._id === this.state.selectedMarkerId) {
        return (
          <MapMarkerInfoCard
            lat={lat}
            lng={lng}
            attraction={attraction}
            closeHandler={this.closeMarkerInfoCard}
          />
        );
      }
    }

    return null;
  }

  render() {
    // if (!this.state.center) {
    const { center, zoom } = this.fitMapToMarkers();

    debugger;
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          // defaultCenter={this.state.center}
          // defaultZoom={this.state.zoom}
          defaultCenter={center}
          defaultZoom={zoom}
          ref={map => (this.map = map)}
        >
          {this.renderMarkers()}
          {this.renderInfoCards()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default withStyles(styles)(PlanMap);
