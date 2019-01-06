import React from 'react';
import PlanShowHero from './plan_show_hero';
import PlanShowNavBarContainer from './plan_show_nav_bar_container';

export default class PlanShow extends React.Component {
  componentDidMount() {
    const { fetchPlan, planId } = this.props;
    fetchPlan(planId);
  }

  render() {
    return (
      <div>
        <div style={{ height: '50px', background: 'gray' }}>Nav Bar Placeholder</div>
        <PlanShowHero city={"Paris"}/>
        <PlanShowNavBarContainer />
      </div>
    );
  }
};