import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  let totalCartItme = cartItems.reduce((perviousValue, currentValue) => {
    return perviousValue + currentValue.amount;
  }, 0);

  function openCartHandler() {
    dispatch({ type: "OPENCART" });
  }

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItme}</span>
    </button>
  );
};

export default CartButton;
