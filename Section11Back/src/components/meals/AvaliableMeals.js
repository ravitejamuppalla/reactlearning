import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./mealItem/MealItem";
import cssClasses from "./AvaliableMeals.module.css";

function AvailableMeals() {
  const [mealsData, setMealsData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [hasError, setHasError] = useState("");
  useEffect(() => {
    const fetchMeals = async () => {
      const responseData = await fetch(
        "https://learningreact-f5a3c-default-rtdb.firebaseio.com/meals.js"
      );
      if (!responseData.ok) {
        throw new Error("Failed to get the meals from backend");
      }
      const responseValue = await responseData.json();
      let loadedMeals = [];
      console.log();
      for (const key in responseValue) {
        loadedMeals.push({
          id: key,
          name: responseValue[key].name,
          description: responseValue[key].description,
          price: responseValue[key].price,
        });
      }
      setMealsData(loadedMeals);
      setLoadingData(false);
    };
    try {
      fetchMeals().catch((error) => {
        setLoadingData(false);
        setHasError(error.message);
      });
    } catch (error) {
      console.log("Entering inot ");
      setLoadingData(false);
      setHasError(error.message);
    }
  }, []);

  const mealsAllValues = mealsData.map((meals) => {
    return (
      <MealItem
        key={meals.id}
        id={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
      ></MealItem>
    );
  });

  if (loadingData) {
    return (
      <section>
        <span className={cssClasses.loader}></span>
      </section>
    );
  }

  if (hasError) {
    console.log("Entering into has Error   " + hasError);
    return (
      <section>
        <p className={cssClasses.error}>{hasError}</p>
      </section>
    );
  }
  return (
    <section className={cssClasses.meals}>
      <Card>
        <ul>{mealsAllValues}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
