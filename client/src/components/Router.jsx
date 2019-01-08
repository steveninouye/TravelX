import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./homepage/LandingPage";
import PlanShowContainer from "./plans/plan_show_container";
import ItinerarySchedule from "./itinerary-schedule/ItinerarySchedule";
import PlanMapContainer from "./plan-map/PlanMapContainer";
import PlansIndex from "./plans/plans-index/PlansIndex";
import NoResultFound from "./plans/NoResultFound";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/plans/:planId" component={PlanShowContainer} />
        <Route path="/city-not-found" component={NoResultFound} />

        <Route path="/schedule" component={ItinerarySchedule} />
        <Route path="/map/:planId" component={PlanMapContainer} />
        <AuthRoute path="/plans" component={PlansIndex} />
      </Switch>
    </>
  );
};
export default Router;
