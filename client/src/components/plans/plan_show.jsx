import React from 'react';
import Button from "@material-ui/core/Button";
import ScheduleShowContainer from './schedule_show_container';
import PlanShowHero from './plan_show_hero';
import PlanShowNavBar from './plan_show_nav_bar';

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
        <PlanShowNavBar />
      </div>
    );
  }
};