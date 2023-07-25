import { useParams } from "react-router-dom";
function ProductDetails() {
  let params = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productID}</p>
    </section>
  );
}

export default ProductDetails;
