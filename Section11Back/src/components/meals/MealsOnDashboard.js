import React, { Fragment } from "react";
import AvailableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

function MealsOnDashboard() {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
}

export default MealsOnDashboard;
