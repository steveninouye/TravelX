import { googleApi } from "../../../../server/src/config/keys_dev";

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

    for (let i = 0; i < this.props.attractions.length; i++) {
      markerLats.push(this.props.attractions[i].geometry.location.lat);
      markerLngs.push(this.props.attractions[i].geometry.location.lng);
    }

    const bounds = {
      ne: {
        lat: Math.min(markerLats),
        lng: Math.max(markerLngs)
      },
      sw: {
        lat: Math.max(markerLats),
        lng: Math.min(markerLngs)
      }
    };

    const size = {
      width: 600,
      height: 600
    };

    const { center, zoom } = fitBounds(bounds, size);

    this.setState({
      setInitialBounds: true,
      center,
      zoom
    });
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
    let markers = this.props.attractions.map(attraction => {
      let { lat, lng } = attraction.geometry.location;
      let id = attraction.id;
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
    for (let i = 0; i < this.props.attractions.length; i++) {
      const attraction = this.props.attractions[i];
      const { lat, lng } = attraction.geometry.location;

      if (attraction.id === this.state.selectedMarkerId) {
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
    if (false) {
      return null;
    } else {
      return (
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleApi }}
            // defaultCenter={this.state.center}
            // defaultZoom={this.state.zoom}
            defaultCenter={{ lat: 48.8570915, lng: 2.3499021 }}
            defaultZoom={14}
            ref={map => (this.map = map)}
          >
            {this.renderMarkers()}
            {this.renderInfoCards()}
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default withStyles(styles)(PlanMap);
