import { Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productID">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
