import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import storeCart from "../../store";
import { Fragment } from "react";
const Cart = (props) => {
  let cartItemList = useSelector((values) => {
    console.log(values);
    return values.cartItem.items;
  });
  console.log(cartItemList);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemList.map((datalist) => {
          let totalCount = datalist.price * datalist.count;
          return (
            <Fragment key={datalist.id}>
              <CartItem
                item={{
                  title: datalist.name,
                  quantity: datalist.count,
                  total: totalCount,
                  price: datalist.price,
                  id: datalist.id,
                }}
              />
            </Fragment>
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
