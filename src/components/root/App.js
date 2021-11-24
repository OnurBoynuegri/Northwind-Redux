import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Dashboard from "./Dashboard";
import NotFound from "../common/NotFound";
function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/product">
          <Dashboard />
        </Route>
        <Route path="/cart">
          <CartDetail />
        </Route>
        <Route path="/saveproduct/:productId">
          <AddOrUpdateProduct />
        </Route>
        <Route path="/saveproduct">
          <AddOrUpdateProduct />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
