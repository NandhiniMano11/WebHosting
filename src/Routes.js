import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalogue from "./Pages/Catalogues";
import Checkout from "./Pages/Checkout/Checkout";

const Routes = () =>
{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Catalogue} exact />
        <Route path="/Checkout" component={Checkout} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
