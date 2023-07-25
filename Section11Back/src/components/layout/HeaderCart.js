import React, { useContext } from "react";
import cssClasses from "./HeaderCart.module.css";
import CartIcon from "../cart/CartIcon";
import cartMeals from "../store/cart-meals";
function HeaderCart(props) {
  const cntx = useContext(cartMeals);
  const { items } = cntx;
  const totalValuesInCart = items.reduce(
    (previous, current) => previous + current.amount,
    0
  );

  return (
    <React.Fragment>
      <button className={cssClasses.button} onClick={props.cartOpen}>
        <span className={cssClasses.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>You Cart</span>
        <span className={cssClasses.badge}>{totalValuesInCart}</span>
      </button>
    </React.Fragment>
  );
}

export default HeaderCart;
