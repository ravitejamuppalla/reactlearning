import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  let dispatch = useDispatch();

  function addCartHandlerFunction(data) {
    // console.log(props);
    let objectdetails = {
      ...props,
      count: 1,
    };

    dispatch(cartActions.addItem(objectdetails));
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
          <button onClick={addCartHandlerFunction}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
