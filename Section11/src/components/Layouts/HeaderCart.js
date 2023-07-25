import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import cssClasses from "./HeaderCart.module.css";
import CartContext from "../../store/cart-context";

function HeaderCart(props) {
  const ctrx = useContext(CartContext);

  const { item } = ctrx;
  const totalNoOfItems = item.reduce((perviousValue, currentItem) => {
    return perviousValue + currentItem.amount;
  }, 0);

  return (
    <button className={cssClasses.button} onClick={props.isShowCartClicked}>
      <span className={cssClasses.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart </span>
      <span className={(cssClasses.bump, cssClasses.badge)}>
        {totalNoOfItems}
      </span>
    </button>
  );
}

export default HeaderCart;
