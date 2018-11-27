import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { ShopApp } from 'app/containers/ShopApp';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { RouterStore, CatalogStore, CartStore } from 'app/stores';

import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
import { ProductList } from 'app/components/Product';
import ProductDetails from 'app/components/Product/ProductDetails';
import { Cart } from 'app/components/Cart';

import './styles/index.scss';
const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <ShopApp>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/catalog" component={CatalogComponent} />
          <Route path="/login" component={LoginComponent} />
        </Switch>
      </ShopApp>
    </Router>
  </Root>
));
export { App };

@inject(STORE_CATALOG, STORE_CART)
@observer
class Main extends React.Component {
  render() {
    // const catalog = this.props[STORE_CATALOG] as CatalogStore;
    // const cart = toJS(this.props[STORE_CART]) as CartStore;
    const cart = this.props[STORE_CART] as CartStore;

    return (
      <React.Fragment>
        {/* <ProductList list={catalog.list} getProducts={catalog.getProducts} /> */}
        <ProductList />
        <Cart cart={cart} />
      </React.Fragment>
    );
  }
}

const LoginComponent = () => <div>LoginComponent</div>;
const CatalogComponent = () => <div>CatalogComponent</div>;

// const App = hot(module)(({ history }) => {}
// export default hot(module)(App);
