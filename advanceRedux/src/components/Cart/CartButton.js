import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartButton = (props) => {
  let dispatch = useDispatch();

  function openCartButtonHandler(params) {
    dispatch(cartActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={openCartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
