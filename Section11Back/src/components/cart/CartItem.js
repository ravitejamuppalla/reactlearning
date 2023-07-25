import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import cartMeals from "../store/cart-meals";
function CartItem(props) {
  const mealscntx = useContext(cartMeals);
  function addingItems() {
    mealscntx.addItem({
      id: props.id,
      name: props.name,
      decription: props.description,
      price: props.price,
      amount: 1,
    });
  }

  function removingItems() {
    mealscntx.removeItem({
      id: props.id,
      name: props.name,
      decription: props.description,
      price: props.price,
      amount: 1,
    });
  }
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{props.price}</div>
          <div className={classes.amount}>x {props.amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removingItems}>-</button>
        <button onClick={addingItems}>+</button>
      </div>
    </li>
  );
}
export default CartItem;
