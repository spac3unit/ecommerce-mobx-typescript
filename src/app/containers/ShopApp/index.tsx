import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import { toJS } from 'mobx';
import { ProductList } from 'app/components/Product';
import { Cart } from 'app/components/Cart';

import { RouterStore, CatalogStore, CartStore } from 'app/stores';
import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
import { Input, Menu } from 'semantic-ui-react';
import Navigation from 'app/components/Menus/Navigation';
import SidebarExample from 'app/components/Menus/Sidebar';

export interface ShopAppProps extends RouteComponentProps<any> {}

export class ShopApp extends React.Component<{}, {}> {
  render() {
    // const routerStore = this.props[STORE_ROUTER] as RouterStore;
    // const catalogStore = this.props[STORE_CATALOG] as CatalogStore;
    // const cartStore = toJS(this.props[STORE_CART]) as CartStore;
    // const { push } = this.props.history;
    return (
      <div>
        <Navigation />
        <SidebarExample />
        {this.props.children}
      </div>
    );
  }
}
