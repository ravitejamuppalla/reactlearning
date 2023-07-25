import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "P1",
    title: "Test",
    price: "8",
    decription: "This is a first product - amazing!",
  },
];

const Products = (props) => {
  const productItems = DUMMY_DATA.map((eachValue) => {
    return (
      <ProductItem
        key={eachValue.id}
        id={eachValue.id}
        title={eachValue.title}
        price={+eachValue.price}
        description={eachValue.decription}
      ></ProductItem>
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItems}</ul>
    </section>
  );
};

export default Products;
