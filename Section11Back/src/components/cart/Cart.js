import React, { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import cartMeals from "../store/cart-meals";
function Cart(props) {
  const cntx = useContext(cartMeals);
  console.log(cntx);
  const { items } = cntx;
  const cartItemsValue = items.map((values) => {
    return (
      <CartItem
        key={values.id}
        id={values.id}
        name={values.name}
        price={values.price}
        amount={values.amount}
      ></CartItem>
    );
  });

  const returningTotalAmount = cntx.totalAmount.toFixed("2");
  return (
    <Model isClose={props.openCartData}>
      <ul className={classes["cart-items"]}>{cartItemsValue}</ul>
      <div className={classes.total}>
        <div>Total</div>
        <div>{returningTotalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.openCartData}>
          Close
        </button>
        <button>Order</button>
      </div>
    </Model>
  );
}

export default Cart;
