import React, { useContext } from "react";
import cssClasses from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import cartMeals from "../../store/cart-meals";
function MealItem(props) {
  const mealcntx = useContext(cartMeals);
  const totalAmount = (amount) => {
    mealcntx.addItem({
      id: props.id,
      name: props.name,
      decription: props.description,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className={cssClasses.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={cssClasses.description}>{props.description}</div>
        <div className={cssClasses.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm addamounttoCart={totalAmount}></MealItemForm>
      </div>
    </li>
  );
}

export default MealItem;
