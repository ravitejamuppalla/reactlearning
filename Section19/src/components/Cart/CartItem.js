import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  function addingProductHandler() {
    const addingCartItem = {
      id: id,
      title: title,
      description: total,
      price: price,
      amount: 1,
    };
    dispatch({ type: "ADDITEMS", value: addingCartItem });
  }

  function removingProductHandler() {
    const addingCartItem = {
      id: id,
      title: title,
      description: total,
      price: price,
      amount: 1,
    };
    dispatch({ type: "REMOVEITEMS", value: addingCartItem });
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removingProductHandler}>-</button>
          <button onClick={addingProductHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
