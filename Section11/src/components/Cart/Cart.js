import React, { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

function Cart(props) {
  const cntxItems = useContext(CartContext);
  const addItemHandler = (item) => {
    cntxItems.additem({ ...item, amount: 1 });
  };

  const removingItemHandler = (item) => {
    cntxItems.removeItem(id);
  };

  console.log(cntxItems.item);
  const cartItems = cntxItems.item.map((item) => (
    <CartItem
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      amount={item.amount}
      onAdd={addItemHandler.bind(null, item)}
      onRemove={removingItemHandler.bind(null, item.id)}
    ></CartItem>
  ));

  const isItemInPlace = cntxItems.item.length > 0;

  const totalAmount = `$${cntxItems.totalAmount.toFixed(2)}`;

  return (
    <Model isClose={props.closeCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {isItemInPlace && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
}

export default Cart;
