import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = (props) => {
  const AddedValue = useSelector((state) => state.cartItems);
  // console.log(AddedValue);
  const dispatch = useDispatch();
  const { title, price, description } = props;
  function addingProductHandler() {
    const addingCartItem = {
      id: props.id,
      title: props.title,
      description: props.description,
      price: props.price,
      amount: 1,
    };
    dispatch({ type: "ADDITEMS", value: addingCartItem });
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addingProductHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
