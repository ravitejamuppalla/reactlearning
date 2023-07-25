import React from "react";
import AvailableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

function Meals() {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
}

export default Meals;
