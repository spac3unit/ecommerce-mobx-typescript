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

export interface ShopAppProps extends RouteComponentProps<any> {}

export class ShopApp extends React.Component<{}, {}> {
  componentWillMount() {
    // this.props.router.replace('');
  }
  componentWillReceiveProps(nextProps: ShopAppProps, nextContext: any) {}

  render() {
    // const routerStore = this.props[STORE_ROUTER] as RouterStore;
    // const catalogStore = this.props[STORE_CATALOG] as CatalogStore;
    // const cartStore = toJS(this.props[STORE_CART]) as CartStore;
    // const { push } = this.props.history;
    return (
      <div className={style.normal}>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

// @withRouter
@inject(STORE_ROUTER, STORE_CATALOG, STORE_CART)
class Navigation extends React.Component<{}, {}> {
  render() {
    const router = this.props[STORE_ROUTER] as RouterStore;

    return (
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav
          className="uk-navbar-container"
          uk-navbar="dropbar: true;"
          style={{
            position: 'relative',
            zIndex: 980
          }}
        >
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a
                  onClick={() => router.history.push('/')}
                  className="pure-menu-link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.history.push('/catalog')}
                  className="pure-menu-link"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.history.push('/login')}
                  className="pure-menu-link"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="pure-menu-link"
                  type="button"
                  uk-toggle="target: #offcanvas-usage"
                >
                  Open ☰ 🍔
                </a>
                <div
                  id="offcanvas-usage"
                  uk-offcanvas="flip: true; overlay: true"
                >
                  <div className="uk-offcanvas-bar">
                    <button
                      className="uk-offcanvas-close"
                      type="button"
                      uk-close="true"
                    />
                    <h3>Title</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
