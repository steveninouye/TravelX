import React from 'react';
import PlanShowHero from './plan_show_hero';
import PlanShowNavBarContainer from './plan_show_nav_bar_container';
import NavBar from './navbar'

export default class PlanShow extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     city: ''
  //   }
  // };

  componentDidMount() {  
    const { getRandCityItinerary, city } = this.props;
    getRandCityItinerary(city).then(res => this.props.history.push(`/plans/${res.itinerary._id}`));
    document.title = "TravelX | Individual Plan";
  };

  render() {
    return (
      <div>
        <NavBar/>
        <PlanShowHero city={this.props.city}/>
        <PlanShowNavBarContainer />
      </div>
    );
  }
};