import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  console.log(props.item);

  let dispatch = useDispatch();

  function removeItemsHandler() {
    dispatch(cartActions.removeItems(props.item));
  }

  function addItemsHandler(params) {
    let objectdetails = {
      name: props.item.title,
      price: props.item.price,
      id: props.item.id,
      count: 1,
    };
    console.log(objectdetails);
    dispatch(cartActions.addItem(objectdetails));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemsHandler}>-</button>
          <button onClick={addItemsHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
