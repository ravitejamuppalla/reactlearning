import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import ProductContext from "../../context/store-context";

import Card from "../UI/Card";
import "./ProductItem.css";
import { toggleFav } from "../../store/actions/products";

const ProductItem = (props) => {
  const cntxValue = useContext(ProductContext).isFavorite;
  // const dispatch = useDispatch();

  const toggleFavHandler = () => {
    cntxValue(props.id);
    // dispatch(toggleFav(props.id));
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
