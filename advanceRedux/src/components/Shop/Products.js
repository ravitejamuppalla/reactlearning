import { Fragment } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

let productList = [
  {
    id: "1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "2",
    title: "Test2",
    price: 8,
    description: "This is a Second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map((productDetails) => {
          return (
            <Fragment key={productDetails.id}>
              <ProductItem
                id={productDetails.id}
                title={productDetails.title}
                price={productDetails.price}
                description={productDetails.description}
              />
            </Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
