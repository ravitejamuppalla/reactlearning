import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const DataFromRedux = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.totalAmount);

  // console.log(DataFromRedux);
  const CartIteamsValues = DataFromRedux.map((values) => {
    return (
      <CartItem
        key={Math.floor(Math.random() * 1000)}
        item={{
          id: values.id,
          title: values.title,
          quantity: values.amount,
          total: totalAmount,
          price: values.price,
        }}
      ></CartItem>
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{CartIteamsValues}</ul>
    </Card>
  );
};

export default Cart;
