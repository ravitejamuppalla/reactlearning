import { Fragment } from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <Fragment>
      <h1>This is Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">A Online classes</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Products;
