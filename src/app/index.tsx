import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch, Redirect } from 'react-router';

import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { RouterStore, CatalogStore, CartStore } from 'app/stores';
import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
import { Root } from 'app/containers/Root';
import { ShopApp } from 'app/containers/ShopApp';
import { ProductList } from 'app/components/Product';
import ProductDetails from 'app/components/Product/ProductDetails';
import { Cart } from 'app/components/Cart';
import { Catalog } from 'app/components/Catalog/CatalogView';
import CatalogV2 from 'app/components/Catalog/Catalog';

import './styles/index.scss';

let loggedIn = true;
const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <ShopApp>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
            }
          />
          <Route path="/home" component={Main} />
          <Route path="/catalog/product/:id" component={ProductDetails} />
          <Route path="/catalog" component={CatalogV2} />
          <Route path="/login" component={LoginComponent} />
        </Switch>
      </ShopApp>
    </Router>
  </Root>
));
export { App };

@inject(STORE_CATALOG, STORE_CART)
@observer
class Main extends React.Component<any, any> {
  render() {
    const cart = this.props[STORE_CART] as CartStore;

    return (
      <React.Fragment>
        <ProductList />
        <Cart cart={cart} />
      </React.Fragment>
    );
  }
}

const LoginComponent = () => <div>LoginComponent</div>;

// const App = hot(module)(({ history }) => {}
// export default hot(module)(App);
