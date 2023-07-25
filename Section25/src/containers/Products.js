import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ProductContext from "../context/store-context";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const cntxvalue = useContext(ProductContext);
  const productList = cntxvalue.products.products;
  console.log(typeof productList);
  // const productList = useSelector((state) => state.shop.products);
  console.log(cntxvalue);
  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
