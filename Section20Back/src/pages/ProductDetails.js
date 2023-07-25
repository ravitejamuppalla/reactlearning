import { useParams } from "react-router-dom";
function ProductDetails() {
  const params = useParams().productID;
  console.log(params);
  return (
    <section>
      <h1>This is Product detail Page</h1>
      <p>{params}</p>
    </section>
  );
}

export default ProductDetails;
